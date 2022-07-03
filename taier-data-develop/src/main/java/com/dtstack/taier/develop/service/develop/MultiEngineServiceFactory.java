/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.dtstack.taier.develop.service.develop;

import com.dtstack.taier.common.enums.EComponentType;
import com.dtstack.taier.common.enums.EScheduleJobType;
import com.dtstack.taier.common.exception.RdosDefineException;
import com.dtstack.taier.develop.service.develop.impl.DevelopHiveSqlExeService;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * 根据对应的引擎类型获取执行实现
 * Date: 2019/5/13
 * Company: www.dtstack.com
 *
 * @author xuchao
 */

@Component
public class MultiEngineServiceFactory {

    @Resource(name = "developSparkSqlExeService")
    private ISqlExeService batchSparkSqlExeService;

    @Resource(name = "developHadoopJobExeService")
    private IDevelopJobExeService batchHadoopJobExeService;

    @Resource(name = "developHiveSqlExeService")
    private DevelopHiveSqlExeService batchHiveSqlExeService;

    @Resource(name = "developHadoopSelectSqlService")
    private IDevelopSelectSqlService batchHadoopSelectSqlService;

    @Resource(name = "hadoopDataDownloadService")
    private IDataDownloadService hadoopDataDownloadService;

    @Resource(name = "componentSparkThriftService")
    private IComponentService componentSparkThriftService;

    @Resource(name = "componentHiveServerService")
    private IComponentService componentHiveServerService;

    public ISqlExeService getSqlExeService(Integer taskType) {
        if (EScheduleJobType.SPARK_SQL.getVal().equals(taskType)) {
            return batchSparkSqlExeService;
        }else if (EScheduleJobType.HIVE_SQL.getVal().equals(taskType)) {
            return batchHiveSqlExeService;
        }
        throw new RdosDefineException(String.format("not support task type %d now", taskType));
    }

    public IDevelopJobExeService getBatchJobExeService(Integer taskType) {
        if (EScheduleJobType.SPARK_SQL.getType().equals(taskType)
                || EScheduleJobType.SYNC.getType().equals(taskType)
                || EScheduleJobType.HIVE_SQL.getType().equals(taskType)) {
            return batchHadoopJobExeService;
        }
        throw new RdosDefineException(String.format("not support engine type %d now", taskType));
    }

    /**
     * 根据任务类型获取sql查询Service
     * @param taskType
     * @return
     */
    public IDevelopSelectSqlService getBatchSelectSqlService(Integer taskType) {
        if (EScheduleJobType.SPARK_SQL.getType().equals(taskType) || EScheduleJobType.HIVE_SQL.getType().equals(taskType)) {
            return batchHadoopSelectSqlService;
        }
        throw new RdosDefineException(String.format("not support engine type %d now", taskType));
    }

    /**
     * 根据任务类型获取下载的Service
     * @param taskType
     * @return
     */
    public IDataDownloadService getDataDownloadService(Integer taskType) {
        if (EScheduleJobType.SPARK_SQL.getType().equals(taskType)
            || EScheduleJobType.HIVE_SQL.getType().equals(taskType)
            || EScheduleJobType.SYNC.getType().equals(taskType)) {
            return hadoopDataDownloadService;
        }
        throw new RdosDefineException(String.format("not support engine type %d now", taskType));
    }

    /**
     * 根据组件类型获取组件操作
     *
     * @param componentTypeCode
     * @return
     */
    public IComponentService getComponentService(Integer componentTypeCode){
        EComponentType componentType = EComponentType.getByCode(componentTypeCode);
        if (EComponentType.SPARK_THRIFT == componentType) {
            return componentSparkThriftService;
        }else if (EComponentType.HIVE_SERVER == componentType){
            return componentHiveServerService;
        }
        throw new RdosDefineException(String.format("not support component by type %d now", componentType));
    }

}
