(ns paperboard.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [paperboard.core-test]
    [paperboard.services.column-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
         'paperboard.services.column-test))
    0
    1))
