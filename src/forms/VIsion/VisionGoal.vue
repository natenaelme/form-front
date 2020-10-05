<template>
<div>
    <HeaderFile :FirstHeader="$t('GoalCommon.VitionGoal')" />
    <b-container cols="9">
        <b-list-group>
            <b-row>

                <b-col lg=1>Date :</b-col>
                <b-col lg=2> <input type="date" v-model="form.Date" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" style="width:200px !important">
                    <br>
                </b-col>
            </b-row>
            <b-list-group-item class="table-responsive">

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th colspan="2" class="text-center">{{ $t("GoalCommon.Well") }}</th>
                            <th colspan="16" class="text-center">{{ $t("GoalCommon.Detail") }}</th>
                            <th colspan="5" class="text-center">{{ $t("GoalCommon.Process") }}</th>
                        </tr>
                        <tr>

                            <th scope="row" colspan="2" class="align-middle col-6" style="background-color:black;color:white">{{ $t("GoalCommon.VitionGoal") }}</th>

                            <th class="align-middle" scope="col">{{ $t("GoalCommon.FirstStep") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.DeadLine") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Where") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Required") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Skills") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.DidI") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.AnyOne") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Purpose") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.WhatWill") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Impact") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Visualization") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Check") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.WhoCold") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.None") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Useful") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Hindering") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Daily") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Weekly") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Monthly") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Yearly") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Calendar") }}</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowspan="2" class="align-middle">{{ $t("GoalCommon.LongTerm") }}</th>

                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.VitionGoal" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.FirstStep" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.DeadLine" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Where" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Required" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Skills" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.DidI" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.AnyOne" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Purpose" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.WhatWill" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Impact" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Visualization" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Check" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.WhoCold" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.None" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Useful" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Hindering" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Daily" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Weekly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Monthly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Yearly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermOne.Calendar" type="text" required></b-form-input>
                            </td>

                        </tr>

                        <tr>

                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.VitionGoal" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.FirstStep" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.DeadLine" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Where" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Required" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Skills" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.DidI" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.AnyOne" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Purpose" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.WhatWill" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Impact" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Visualization" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Check" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.WhoCold" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.None" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Useful" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Hindering" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Daily" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Weekly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Monthly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Yearly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.LongTermTwo.Calendar" type="text" required></b-form-input>
                            </td>

                        </tr>
                        <tr>
                            <th rowspan="2" class="align-middle">{{ $t("GoalCommon.MidTerm") }}</th>

                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.VitionGoal" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.FirstStep" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.DeadLine" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Where" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Required" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Skills" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.DidI" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.AnyOne" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Purpose" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.WhatWill" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Impact" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Visualization" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Check" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.WhoCold" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.None" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Useful" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Hindering" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Daily" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Weekly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Monthly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Yearly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermOne.Calendar" type="text" required></b-form-input>
                            </td>

                        </tr>
                        <tr>

                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.VitionGoal" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.FirstStep" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.DeadLine" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Where" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Required" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Skills" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.DidI" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.AnyOne" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Purpose" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.WhatWill" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Impact" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Visualization" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Check" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.WhoCold" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.None" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Useful" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Hindering" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Daily" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Weekly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Monthly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Yearly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.MidTermTwo.Calendar" type="text" required></b-form-input>
                            </td>

                        </tr>
                        <tr>
                            <th rowspan="2" class="align-middle">{{ $t("GoalCommon.ShortTerm") }}</th>

                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.VitionGoal" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.FirstStep" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.DeadLine" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Where" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Required" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Skills" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.DidI" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.AnyOne" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Purpose" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.WhatWill" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Impact" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Visualization" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Check" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.WhoCold" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.None" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Useful" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Hindering" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Daily" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Weekly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Monthly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Yearly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermOne.Calendar" type="text" required></b-form-input>
                            </td>

                        </tr>
                        <tr>

                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.VitionGoal" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.FirstStep" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.DeadLine" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Where" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Required" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Skills" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.DidI" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.AnyOne" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Purpose" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.WhatWill" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Impact" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Visualization" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Check" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.WhoCold" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.None" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Useful" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Hindering" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Daily" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Weekly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Monthly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Yearly" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.ShortTermTwo.Calendar" type="text" required></b-form-input>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </b-list-group-item>
        </b-list-group>
        <div class="position-relative row form-check">
            <div class="text-center">
                <button class="btn btn-primary" @click="saveForm()">Save </button><br>
                <div v-if="!show" class="lds-ripple">
                    <div></div>
                    <div></div>
                    loading..
                </div>
            </div><br>
            <div class="text-center">
                <b-button to="/question/spritual_goal" variant="outline-success">
                    <b-icon icon="arrow-left"></b-icon> back
                </b-button>
                <b-button :disabled="!submited" to="/question/mental_goal" variant="outline-success">
                    Next<b-icon icon="arrow-right"></b-icon>
                </b-button>

            </div>

        </div>
    </b-container>

</div>
</template>

<script>
import HeaderFile from '../../containers/HeaderFile';
const {
    posts,
    getUserData,
    patchData,
    getUrl
} = require("../../assets/js/service");
export default {
    components: {
        HeaderFile
    },
    mounted: function () {

        let dataBase = '/visionGoals';
        getUserData(dataBase, this.id, this.token).then(resp => {
                console.log(resp);
                this.form = resp.data;
                this.edit = true;
                this.submited = true;
            })
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    // this.makeToast("", "Wellcome")
                } else if (err.request) {
                    this.makeToast("danger", "Connection Problem")
                } else {
                    this.makeToast("danger", "Some Error has Happened")
                }
            })
    },
    data() {
        return {
            form: {
                Date: '',
                LongTermOne: {
                    VitionGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',

                },
                LongTermTwo: {
                    VitionGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',

                },
                MidTermOne: {
                    VitionGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',
                },
                MidTermTwo: {
                    VitionGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',
                },
                ShortTermOne: {
                    VitionGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',
                },
                ShortTermTwo: {
                    VitionGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',
                },
                userId: localStorage.getItem("userId")

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
        }
    },
    methods: {
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: variant,
                variant: variant,
                solid: true
            })
        },

        saveForm() {
            this.show = false;
            let dataBase = "/visionGoals";
            console.log(this.show);
            if (this.edit) {
                patchData(dataBase, this.token, this.form).then(resp => {
                        console.log(resp);
                        this.makeToast("success", "success fully edited your form");
                        this.show = true;
                    })
                    .catch(err => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "There is a problem with your form")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    })
            } else {

                posts(dataBase, this.form).then((resp) => {
                        console.log(resp.data);
                        this.edit = true;
                        this.form.DreamFamily = '';
                        this.form.DreamSpiritual = '';
                        this.form.DreamSocal = '';
                        this.form.DreamLife = '';
                        this.form.DreamHealth = '';
                        this.form.DreamKnowledge = '';
                        this.form.DreamFinancial = '';
                        this.submited = true;
                        this.$emit('changeTitle', 'vision');
                        this.makeToast("success", "success fully submited your form");
                        this.show = true;

                    }, )
                    .catch(err => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "There is a problem with your form")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    })

            }
        }

    }

}
</script>

<style>
input {
    width: 100px !important;
}
</style>
