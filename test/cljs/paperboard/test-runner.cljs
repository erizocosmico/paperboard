(ns paperboard.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [paperboard.core-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'paperboard.core-test))
    0
    1))
