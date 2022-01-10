<?php
class Ma_Indexer_Model_Cron {

    public function run() {

        $indexingProcesses = Mage::getSingleton('index/indexer')->getProcessesCollection();
        foreach ($indexingProcesses as $indexingProcess) {
            $indexingProcess->reindexEverything();
        }

    }

}