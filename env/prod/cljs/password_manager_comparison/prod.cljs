(ns password-manager-comparison.prod
  (:require [password-manager-comparison.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
