(ns password-manager-comparison.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [reagent.dom.server :as rdserver]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]))

;; -------------------------
;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/items"
     ["" :items]
     ["/:item-id" :item]]
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

;; -------------------------
;; Page components

(defn home-page []
  (fn []
    [:span.main
     [:h1 "Welcome to password-manager-comparison"]
     [:ul
      [:li [:a {:href (path-for :items)} "Items of password-manager-comparison"]]
      [:li [:a {:href "/broken/link"} "Broken link"]]]]))



(defn items-page []
  (fn []
    [:span.main
     [:h1 "The items of password-manager-comparison"]
     [:script {:src "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"}]
     [:script {:src "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"}]
     [:script {:src "/css/main.css"}]
     [:script {:src "/js/main.js" :type "module"}]
     [:link {:href "main.css" :rel "stylesheet"}]
     [:select {:class "d-inline-block w-auto form-select"} (map (fn [item-id]
                                                                  [:option {:name (str "item-" item-id) :key (str "item-" item-id)}
                                                                   item-id])
                                                                (range 1 6))]]))
;; (defn items-page []
;;   (fn []
;;     [:span.main
;;      [:h1 "The items of password-manager-comparison"]
;;      [:ul (map (fn [item-id]
;;                  [:li {:name (str "item-" item-id) :key (str "item-" item-id)}
;;                   [:a {:href (path-for :item {:item-id item-id})} "Item: " item-id]])
;;                (range 1 60))]]))

        ;; <select class='d-inline-block w-auto form-select' aria-label='Default select example'  id='compare${id}' onchange='changeTable()'>
        ;;   <option value>(select)</option>
        ;;   ${dd}
        ;; </select>

(defn ^:export formatValue [v]
  (rdserver/render-to-string
   (if (number? v)
      v
      (case v
        "yes"     [:span {:class "badge bg-success"} v]
        "poor"    [:span {:class "badge bg-warning"} v]
        "no"      [:span {:class "badge bg-danger"} v]
        "unknown" [:span {:class "badge bg-info"} v]
        [:span {:class "badge bg-dark"} v]
        ))
  )
)

(defn item-page []
  (fn []
    (let [routing-data (session/get :route)
          item (get-in routing-data [:route-params :item-id])] 
      [:span.main
       [:h1 (str "Item " item " of password-manager-comparison")]
       [:p [:a {:href (path-for :items)} "Back to the list of items"]]])))


(defn about-page []
  (fn [] [:span.main
          [:h1 "About password-manager-comparison"]]))


(defn change-table []
       (fn []
           [:div
            {:dangerouslySetInnerHTML
             {:__html (. js/window formatTable) }}]
           ))



;; -------------------------
;; Translate routes -> page components
(set! (.-onload js/window)
    (fn [] ;; This function is also never called.
        (rdom/render [change-table]
            (. js/document (getElementById "app")))
        ))

(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :items #'items-page
    :item #'item-page))


;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [:header
        [:p [:a {:href (path-for :index)} "Home"] " | "
         [:a {:href (path-for :about)} "About password-manager-comparison"]]]
       [page]
       [:footer
        [:p "password-manager-comparison was generated by the "
         [:a {:href "https://github.com/reagent-project/reagent-template"} "Reagent Template"] "."]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (rdom/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)
        ))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))

(defn ^:dev/after-load reload! []
  (mount-root))