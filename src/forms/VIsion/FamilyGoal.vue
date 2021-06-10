<template>
<div>
    <HeaderFile :FirstHeader="$t('GoalCommon.FamilyGoal')" />
    <b-container cols="9">
        <b-list-group>
            <b-row>

                <b-col lg=1>{{$t('Common.Date')}}:</b-col>
                <b-col lg=2> <input type="date" v-model="form.Date" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" style="width:200px !important">
                    <br>
                </b-col>
            </b-row>
            <b-list-group-item>
                <b-row>
                    <b-col md="2">
                        {{$t('Action_Plan.LongTermGoal')}}
                    </b-col>
                    <b-col md="10">
                        <input type="text" :placeholder="$t('Action_Plan.LTG')" v-model="form.LongTermOne.FamilyGoal" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                        <br>
                        <input type="text" :placeholder="$t('Action_Plan.LTGT')" v-model="form.LongTermTwo.FamilyGoal" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="2">
                        {{$t('Action_Plan.MidTermGoal')}}
                    </b-col>
                    <b-col md="10">
                        <input type="text" :placeholder="$t('Action_Plan.MTG')" v-model="form.MidTermOne.FamilyGoal" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                        <br>
                        <input type="text" :placeholder="$t('Action_Plan.MTGT')" v-model="form.MidTermTwo.FamilyGoal" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="2">
                        {{$t('Action_Plan.ShortTermGoal')}}
                    </b-col>
                    <b-col md="10">
                        <input type="text" :placeholder="$t('Action_Plan.STG')" v-model="form.ShortTermOne.FamilyGoal" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                        <br>
                        <input type="text" :placeholder="$t('Action_Plan.MTGT')" v-model="form.ShortTermTwo.FamilyGoal" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                    </b-col>
                </b-row>
            </b-list-group-item>
            <br>
            <b-list-group-item>
                <table class="table table-bordered" v-if="nextView  != 11">
                    <thead>
                        <tr>
                            <th colspan="2" width="40%" class="text-center">{{ $t("GoalCommon.Well") }}</th>
                            <th colspan="1" width="60%" v-if="nextView<17" class="text-center">{{ $t("GoalCommon.Detail") }}</th>
                            <th colspan="1" width="60%" v-if="nextView>=17" class="text-center">{{ $t("GoalCommon.Process") }}</th>

                        </tr>

                        <tr>
                            <th scope="row" colspan="2" width="50%" class="align-middle text-center" style="background-color:black;color:white;">{{ $t("GoalCommon.FamilyGoal") }}</th>

                            <th class="align-middle text-center" scope="col">{{ $t("GoalCommon."+tableHeader[nextView]) }}</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <th rowspan="2" width="10%">{{$t('Action_Plan.LongTermGoal')}}</th>
                            <th width="30%">
                                <p style="width:100%;display: inline-block;">{{$t('Action_Plan.Goal')}} 1 .{{form.LongTermOne.FamilyGoal}}</p>
                            </th>
                            <th>
                                <b-form-textarea v-model="form.LongTermOne[tableHeader[nextView]]" rows="auto" max-rows="2">
                                </b-form-textarea>
                            </th>

                        </tr>
                        <tr>
                            <th>
                                <p>{{$t('Action_Plan.Goal')}} 2 .{{form.LongTermTwo.FamilyGoal}}</p>
                            </th>
                            <th>
                                <b-form-textarea v-model="form.LongTermTwo[tableHeader[nextView]]" rows="auto" max-rows="2">
                                </b-form-textarea>
                            </th>
                        </tr>

                        <tr>
                            <th rowspan="2" width="10%">{{$t('Action_Plan.MidTermGoal')}}</th>
                            <th width="30%">
                                <p style="width:100%;display: inline-block;">{{$t('Action_Plan.Goal')}} 1 .{{form.MidTermOne.FamilyGoal}}</p>
                            </th>
                            <th>
                                <b-form-textarea v-model="form.MidTermOne[tableHeader[nextView]]" rows="auto" max-rows="2">
                                </b-form-textarea>
                            </th>

                        </tr>
                        <tr>
                            <th>
                                <p>{{$t('Action_Plan.Goal')}} 2 .{{form.MidTermTwo.FamilyGoal}}</p>
                            </th>
                            <th>
                                <b-form-textarea v-model="form.MidTermTwo[tableHeader[nextView]]" rows="auto" max-rows="2">
                                </b-form-textarea>
                            </th>
                        </tr>

                        <tr>
                            <th rowspan="2" width="10%">{{$t('Action_Plan.ShortTermGoal')}}</th>
                            <th width="30%">
                                <p style="width:100%;display: inline-block;">{{$t('Action_Plan.Goal')}} 1 .{{form.ShortTermOne.FamilyGoal}}</p>
                            </th>
                            <th>
                                <b-form-textarea v-model="form.ShortTermOne[tableHeader[nextView]]" rows="auto" max-rows="2">
                                </b-form-textarea>
                            </th>

                        </tr>
                        <tr>
                            <th>
                                <p>{{$t('Action_Plan.Goal')}} 2 .{{form.ShortTermTwo.FamilyGoal}}</p>
                            </th>
                            <th>
                                <b-form-textarea v-model="form.ShortTermTwo[tableHeader[nextView]]" rows="auto" max-rows="2">
                                </b-form-textarea>
                            </th>
                        </tr>

                    </tbody>
                </table>
                <div v-if="nextView  == 11">
                    <h3 class="text-center">{{$t("GoalCommon.Check") }}</h3>
                    <b-list-group-item v-for="index in 9" :key="index">
                        {{$t('Ensure_The_Goal.'+index)}}
                    </b-list-group-item>
                    <table class="table">

                        <tbody>

                            <tr>
                                <th style="width:20%" class="align-middle">
                                    {{$t('Ensure_The_Goal.MajorLong')}}
                                </th>
                                <th style="width:20%" class="align-middle">
                                    <ul v-if="form.LongTermOne.Check" style="overflow-y: scroll; height:150px">
                                        <li v-for="file in form.LongTermOne.Check" :key='file'>{{file}}</li>

                                    </ul>
                                </th>

                                <th class="align-middle" v-for="index in 9" :key="index">
                                    <b-form-checkbox-group id="checkbox-group-2" v-model="form.LongTermOne.Check" name="flavour-2">
                                        <b-form-checkbox :value="$t('Ensure_The_Goal.'+index)">{{index}}</b-form-checkbox>
                                    </b-form-checkbox-group>
                                </th>

                            </tr>
                            <tr>
                                <th style="width:20%" class="align-middle">
                                    {{$t('Ensure_The_Goal.MajorMid')}}
                                </th>
                                <th style="width:20%" class="align-middle">
                                    <ul v-if="form.MidTermOne.Check" style="overflow-y: scroll; height:150px">
                                        <li v-for="file in form.MidTermOne.Check" :key='file'>{{file}}</li>

                                    </ul>
                                </th>

                                <th class="align-middle" v-for="index in 9" :key="index">
                                    <b-form-checkbox-group id="checkbox-group-2" v-model="form.MidTermOne.Check" name="flavour-2">
                                        <b-form-checkbox :value="$t('Ensure_The_Goal.'+index)">{{index}}</b-form-checkbox>
                                    </b-form-checkbox-group>
                                </th>

                            </tr>
                            <tr>
                                <th style="width:20%" class="align-middle">
                                    {{$t('Ensure_The_Goal.MajorShort')}}
                                </th>
                                <th style="width:20%" class="align-middle">
                                    <ul v-if="form.ShortTermOne.Check" style="overflow-y: scroll; height:150px">
                                        <li v-for="file in form.ShortTermOne.Check" :key='file'>{{file}}</li>

                                    </ul>
                                </th>

                                <th class="align-middle" v-for="index in 9" :key="index">
                                    <b-form-checkbox-group id="checkbox-group-2" v-model="form.ShortTermOne.Check" name="flavour-2">
                                        <b-form-checkbox :value="$t('Ensure_The_Goal.'+index)">{{index}}</b-form-checkbox>
                                    </b-form-checkbox-group>
                                </th>

                            </tr>

                        </tbody>

                    </table>

                </div>

                <div colspan="3" class="text-center">
                    <b-button @click="nextView--" :disabled="nextView<=0" variant="success">Back</b-button>
                    <b-button @click="nextView++" :disabled="nextView>=20" variant="success">Next</b-button>
                </div>

            </b-list-group-item>

            <b-list-group-item>

            </b-list-group-item>

            <b-list-group-item class="table-responsive">

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th colspan="2" class="text-center">{{ $t("GoalCommon.Well") }}</th>
                            <th colspan="16" class="text-center">{{ $t("GoalCommon.Detail") }}</th>
                            <th colspan="5" class="text-center">{{ $t("GoalCommon.Process") }}</th>
                        </tr>
                        <tr>

                            <th scope="row" colspan="2" class="align-middle col-6" style="background-color:black;color:white">{{ $t("GoalCommon.FamilyGoal") }}</th>

                            <th class="align-middle" scope="col">{{ $t("GoalCommon.FirstStep") }}</th>
                            <th class="align-middle" v-if="nextView > 0" scope="col">{{ $t("GoalCommon.DeadLine") }}</th>
                            <th class="align-middle" v-if="nextView > 1" scope="col">{{ $t("GoalCommon.Where") }}</th>
                            <th class="align-middle" v-if="nextView > 2" scope="col">{{ $t("GoalCommon.Required") }}</th>
                            <th class="align-middle" v-if="nextView > 3" scope="col">{{ $t("GoalCommon.Skills") }}</th>
                            <th class="align-middle" v-if="nextView > 4" scope="col">{{ $t("GoalCommon.DidI") }}</th>
                            <th class="align-middle" v-if="nextView > 5" scope="col">{{ $t("GoalCommon.AnyOne") }}</th>
                            <th class="align-middle" v-if="nextView > 6" scope="col">{{ $t("GoalCommon.Purpose") }}</th>
                            <th class="align-middle" v-if="nextView > 7" scope="col">{{ $t("GoalCommon.WhatWill") }}</th>
                            <th class="align-middle" v-if="nextView > 8" scope="col">{{ $t("GoalCommon.Impact") }}</th>
                            <th class="align-middle" v-if="nextView > 9" scope="col">{{ $t("GoalCommon.Visualization") }}</th>
                            <th class="align-middle" v-if="nextView > 10" scope="col">{{ $t("GoalCommon.Check") }}</th>
                            <th class="align-middle" v-if="nextView > 11" scope="col">{{ $t("GoalCommon.WhoCold") }}</th>
                            <th class="align-middle" v-if="nextView > 12" scope="col">{{ $t("GoalCommon.None") }}</th>
                            <th class="align-middle" v-if="nextView > 13" scope="col">{{ $t("GoalCommon.Useful") }}</th>
                            <th class="align-middle" v-if="nextView > 14" scope="col">{{ $t("GoalCommon.Hindering") }}</th>
                            <th class="align-middle" v-if="nextView > 16" scope="col">{{ $t("GoalCommon.Daily") }}</th>
                            <th class="align-middle" v-if="nextView > 17" scope="col">{{ $t("GoalCommon.Weekly") }}</th>
                            <th class="align-middle" v-if="nextView > 18" scope="col">{{ $t("GoalCommon.Monthly") }}</th>
                            <th class="align-middle" v-if="nextView > 19" scope="col">{{ $t("GoalCommon.Yearly") }}</th>
                            <th class="align-middle" v-if="nextView > 20" scope="col">{{ $t("GoalCommon.Calendar") }}</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowspan="2" class="align-middle">{{ $t("GoalCommon.LongTerm") }}</th>

                            <td>
                                {{form.LongTermOne.FamilyGoal}}
                            </td>
                            <td>
                                {{form.LongTermOne.FirstStep}}
                            </td>
                            <td v-if="nextView > 0">
                                {{form.LongTermOne.DeadLine}}
                            </td>
                            <td v-if="nextView > 1">
                                {{form.LongTermOne.Where}}
                            </td>
                            <td v-if="nextView > 2">
                                {{form.LongTermOne.Required}}
                            </td>
                            <td v-if="nextView > 3">
                                {{form.LongTermOne.Skills}}
                            </td>
                            <td v-if="nextView > 4">
                                {{form.LongTermOne.DidI}}
                            </td>
                            <td v-if="nextView > 5">
                                {{form.LongTermOne.AnyOne}}
                            </td>
                            <td v-if="nextView > 6">
                                {{form.LongTermOne.Purpose}}
                            </td>
                            <td v-if="nextView > 7">
                                {{form.LongTermOne.WhatWill}}
                            </td>
                            <td v-if="nextView > 8">
                                {{form.LongTermOne.Impact}}
                            </td>
                            <td v-if="nextView > 9">
                                {{form.LongTermOne.Visualization}}
                            </td>
                            <td v-if="nextView > 10">
                                <ul v-if="form.LongTermOne.Check" style="overflow-y: scroll; height:150px">
                                    <li v-for="file in form.LongTermOne.Check" :key='file'>{{file}}</li>

                                </ul>
                            </td>
                            <td v-if="nextView > 11">
                                {{form.LongTermOne.WhoCold}}
                            </td>
                            <td v-if="nextView > 12">
                                {{form.LongTermOne.None}}
                            </td>
                            <td v-if="nextView > 13">
                                {{form.LongTermOne.Useful}}
                            </td>
                            <td v-if="nextView > 14">
                                {{form.LongTermOne.Hindering}}
                            </td>
                            <td v-if="nextView > 16">
                                {{form.LongTermOne.Daily}}
                            </td>
                            <td v-if="nextView > 17">
                                {{form.LongTermOne.Weekly}}
                            </td>
                            <td v-if="nextView > 18">
                                {{form.LongTermOne.Monthly}}
                            </td>
                            <td v-if="nextView > 19">
                                {{form.LongTermOne.Yearly}}
                            </td>
                            <td v-if="nextView > 20">
                                {{form.LongTermOne.Calendar}}
                            </td>

                        </tr>

                        <tr>

                            <td>
                                {{form.LongTermTwo.FamilyGoal}}
                            </td>
                            <td>
                                {{form.LongTermTwo.FirstStep}}
                            </td>
                            <td v-if="nextView > 0">
                                {{form.LongTermTwo.DeadLine}}
                            </td>
                            <td v-if="nextView > 1">
                                {{form.LongTermTwo.Where}}
                            </td>
                            <td v-if="nextView > 2">
                                {{form.LongTermTwo.Required}}
                            </td>
                            <td v-if="nextView > 3">
                                {{form.LongTermTwo.Skills}}
                            </td>
                            <td v-if="nextView > 4">
                                {{form.LongTermTwo.DidI}}
                            </td>
                            <td v-if="nextView > 5">
                                {{form.LongTermTwo.AnyOne}}
                            </td>
                            <td v-if="nextView > 6">
                                {{form.LongTermTwo.Purpose}}
                            </td>
                            <td v-if="nextView > 7">
                                {{form.LongTermTwo.WhatWill}}
                            </td>
                            <td v-if="nextView > 8">
                                {{form.LongTermTwo.Impact}}
                            </td>
                            <td v-if="nextView > 9">
                                {{form.LongTermTwo.Visualization}}
                            </td>
                            <td v-if="nextView > 10">
                                {{form.LongTermTwo.Check}}
                            </td>
                            <td v-if="nextView > 11">
                                {{form.LongTermTwo.WhoCold}}
                            </td>
                            <td v-if="nextView > 12">
                                {{form.LongTermTwo.None}}
                            </td>
                            <td v-if="nextView > 13">
                                {{form.LongTermTwo.Useful}}
                            </td>
                            <td v-if="nextView > 14">
                                {{form.LongTermTwo.Hindering}}
                            </td>
                            <td v-if="nextView > 16">
                                {{form.LongTermTwo.Daily}}
                            </td>
                            <td v-if="nextView > 17">
                                {{form.LongTermTwo.Weekly}}
                            </td>
                            <td v-if="nextView > 18">
                                {{form.LongTermTwo.Monthly}}
                            </td>
                            <td v-if="nextView > 19">
                                {{form.LongTermTwo.Yearly}}
                            </td>
                            <td v-if="nextView > 20">
                                {{form.LongTermTwo.Calendar}}
                            </td>

                        </tr>
                        <tr>
                            <th rowspan="2" class="align-middle">{{ $t("GoalCommon.MidTerm") }}</th>

                            <td>
                                {{form.MidTermOne.FamilyGoal}}
                            </td>
                            <td>
                                {{form.MidTermOne.FirstStep}}
                            </td>
                            <td v-if="nextView > 0">
                                {{form.MidTermOne.DeadLine}}
                            </td>
                            <td v-if="nextView > 1">
                                {{form.MidTermOne.Where}}
                            </td>
                            <td v-if="nextView > 2">
                                {{form.MidTermOne.Required}}
                            </td>
                            <td v-if="nextView > 3">
                                {{form.MidTermOne.Skills}}
                            </td>
                            <td v-if="nextView > 4">
                                {{form.MidTermOne.DidI}}
                            </td>
                            <td v-if="nextView > 5">
                                {{form.MidTermOne.AnyOne}}
                            </td>
                            <td v-if="nextView > 6">
                                {{form.MidTermOne.Purpose}}
                            </td>
                            <td v-if="nextView > 7">
                                {{form.MidTermOne.WhatWill}}
                            </td>
                            <td v-if="nextView > 8">
                                {{form.MidTermOne.Impact}}
                            </td>
                            <td v-if="nextView > 9">
                                {{form.MidTermOne.Visualization}}
                            </td>
                            <td v-if="nextView > 10">
                                <ul v-if="form.MidTermOne.Check" style="overflow-y: scroll; height:150px">
                                    <li v-for="file in form.MidTermOne.Check" :key='file'>{{file}}</li>

                                </ul>
                            </td>
                            <td v-if="nextView > 11">
                                {{form.MidTermOne.WhoCold}}
                            </td>
                            <td v-if="nextView > 12">
                                {{form.MidTermOne.None}}
                            </td>
                            <td v-if="nextView > 13">
                                {{form.MidTermOne.Useful}}
                            </td>
                            <td v-if="nextView > 14">
                                {{form.MidTermOne.Hindering}}
                            </td>
                            <td v-if="nextView > 16">
                                {{form.MidTermOne.Daily}}
                            </td>
                            <td v-if="nextView > 17">
                                {{form.MidTermOne.Weekly}}
                            </td>
                            <td v-if="nextView > 18">
                                {{form.MidTermOne.Monthly}}
                            </td>
                            <td v-if="nextView > 19">
                                {{form.MidTermOne.Yearly}}
                            </td>
                            <td v-if="nextView > 20">
                                {{form.MidTermOne.Calendar}}
                            </td>

                        </tr>
                        <tr>

                            <td>
                                {{form.MidTermTwo.FamilyGoal}}
                            </td>
                            <td>
                                {{form.MidTermTwo.FirstStep}}
                            </td>
                            <td v-if="nextView > 0">
                                {{form.MidTermTwo.DeadLine}}
                            </td>
                            <td v-if="nextView > 1">
                                {{form.MidTermTwo.Where}}
                            </td>
                            <td v-if="nextView > 2">
                                {{form.MidTermTwo.Required}}
                            </td>
                            <td v-if="nextView > 3">
                                {{form.MidTermTwo.Skills}}
                            </td>
                            <td v-if="nextView > 4">
                                {{form.MidTermTwo.DidI}}
                            </td>
                            <td v-if="nextView > 5">
                                {{form.MidTermTwo.AnyOne}}
                            </td>
                            <td v-if="nextView > 6">
                                {{form.MidTermTwo.Purpose}}
                            </td>
                            <td v-if="nextView > 7">
                                {{form.MidTermTwo.WhatWill}}
                            </td>
                            <td v-if="nextView > 8">
                                {{form.MidTermTwo.Impact}}
                            </td>
                            <td v-if="nextView > 9">
                                {{form.MidTermTwo.Visualization}}
                            </td>
                            <td v-if="nextView > 10">
                                {{form.MidTermTwo.Check}}
                            </td>
                            <td v-if="nextView > 11">
                                {{form.MidTermTwo.WhoCold}}
                            </td>
                            <td v-if="nextView > 12">
                                {{form.MidTermTwo.None}}
                            </td>
                            <td v-if="nextView > 13">
                                {{form.MidTermTwo.Useful}}
                            </td>
                            <td v-if="nextView > 14">
                                {{form.MidTermTwo.Hindering}}
                            </td>
                            <td v-if="nextView > 16">
                                {{form.MidTermTwo.Daily}}
                            </td>
                            <td v-if="nextView > 17">
                                {{form.MidTermTwo.Weekly}}
                            </td>
                            <td v-if="nextView > 18">
                                {{form.MidTermTwo.Monthly}}
                            </td>
                            <td v-if="nextView > 19">
                                {{form.MidTermTwo.Yearly}}
                            </td>
                            <td v-if="nextView > 20">
                                {{form.MidTermTwo.Calendar}}
                            </td>

                        </tr>
                        <tr>
                            <th rowspan="2" class="align-middle">{{ $t("GoalCommon.ShortTerm") }}</th>

                            <td>
                                {{form.ShortTermOne.FamilyGoal}}
                            </td>
                            <td>
                                {{form.ShortTermOne.FirstStep}}
                            </td>
                            <td v-if="nextView > 0">
                                {{form.ShortTermOne.DeadLine}}
                            </td>
                            <td v-if="nextView > 1">
                                {{form.ShortTermOne.Where}}
                            </td>
                            <td v-if="nextView > 2">
                                {{form.ShortTermOne.Required}}
                            </td>
                            <td v-if="nextView > 3">
                                {{form.ShortTermOne.Skills}}
                            </td>
                            <td v-if="nextView > 4">
                                {{form.ShortTermOne.DidI}}
                            </td>
                            <td v-if="nextView > 5">
                                {{form.ShortTermOne.AnyOne}}
                            </td>
                            <td v-if="nextView > 6">
                                {{form.ShortTermOne.Purpose}}
                            </td>
                            <td v-if="nextView > 7">
                                {{form.ShortTermOne.WhatWill}}
                            </td>
                            <td v-if="nextView > 8">
                                {{form.ShortTermOne.Impact}}
                            </td>
                            <td v-if="nextView > 9">
                                {{form.ShortTermOne.Visualization}}
                            </td>
                            <td v-if="nextView > 10">
                                <ul v-if="form.ShortTermOne.Check" style="overflow-y: scroll; height:150px">
                                    <li v-for="file in form.ShortTermOne.Check" :key='file'>{{file}}</li>

                                </ul>
                            </td>
                            <td v-if="nextView > 11">
                                {{form.ShortTermOne.WhoCold}}
                            </td>
                            <td v-if="nextView > 12">
                                {{form.ShortTermOne.None}}
                            </td>
                            <td v-if="nextView > 13">
                                {{form.ShortTermOne.Useful}}
                            </td>
                            <td v-if="nextView > 14">
                                {{form.ShortTermOne.Hindering}}
                            </td>
                            <td v-if="nextView > 16">
                                {{form.ShortTermOne.Daily}}
                            </td>
                            <td v-if="nextView > 17">
                                {{form.ShortTermOne.Weekly}}
                            </td>
                            <td v-if="nextView > 18">
                                {{form.ShortTermOne.Monthly}}
                            </td>
                            <td v-if="nextView > 19">
                                {{form.ShortTermOne.Yearly}}
                            </td>
                            <td v-if="nextView > 20">
                                {{form.ShortTermOne.Calendar}}
                            </td>

                        </tr>
                        <tr>

                            <td>
                                {{form.ShortTermTwo.FamilyGoal}}
                            </td>
                            <td>
                                {{form.ShortTermTwo.FirstStep}}
                            </td>
                            <td v-if="nextView > 0">
                                {{form.ShortTermTwo.DeadLine}}
                            </td>
                            <td v-if="nextView > 1">
                                {{form.ShortTermTwo.Where}}
                            </td>
                            <td v-if="nextView > 2">
                                {{form.ShortTermTwo.Required}}
                            </td>
                            <td v-if="nextView > 3">
                                {{form.ShortTermTwo.Skills}}
                            </td>
                            <td v-if="nextView > 4">
                                {{form.ShortTermTwo.DidI}}
                            </td>
                            <td v-if="nextView > 5">
                                {{form.ShortTermTwo.AnyOne}}
                            </td>
                            <td v-if="nextView > 6">
                                {{form.ShortTermTwo.Purpose}}
                            </td>
                            <td v-if="nextView > 7">
                                {{form.ShortTermTwo.WhatWill}}
                            </td>
                            <td v-if="nextView > 8">
                                {{form.ShortTermTwo.Impact}}
                            </td>
                            <td v-if="nextView > 9">
                                {{form.ShortTermTwo.Visualization}}
                            </td>
                            <td v-if="nextView > 10">
                                {{form.ShortTermTwo.Check}}
                            </td>
                            <td v-if="nextView > 11">
                                {{form.ShortTermTwo.WhoCold}}
                            </td>
                            <td v-if="nextView > 12">
                                {{form.ShortTermTwo.None}}
                            </td>
                            <td v-if="nextView > 13">
                                {{form.ShortTermTwo.Useful}}
                            </td>
                            <td v-if="nextView > 14">
                                {{form.ShortTermTwo.Hindering}}
                            </td>
                            <td v-if="nextView > 16">
                                {{form.ShortTermTwo.Daily}}
                            </td>
                            <td v-if="nextView > 17">
                                {{form.ShortTermTwo.Weekly}}
                            </td>
                            <td v-if="nextView > 18">
                                {{form.ShortTermTwo.Monthly}}
                            </td>
                            <td v-if="nextView > 19">
                                {{form.ShortTermTwo.Yearly}}
                            </td>
                            <td v-if="nextView > 20">
                                {{form.ShortTermTwo.Calendar}}
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
                <b-button to="/question/financial_goal" variant="outline-success">
                    <b-icon icon="arrow-left"></b-icon> back
                </b-button>
                <b-button :disabled="!submited" to="/question/socal_goal" variant="outline-success">
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

        let dataBase = '/familyGoals';
        getUserData(dataBase, this.id, this.token).then(resp => {
                this.nextView = 20;
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
            nextView: 0,
            tableHeader: [
                'FirstStep',
                'DeadLine',
                'Where',
                'Required',
                'Skills',
                'DidI',
                'AnyOne',
                'Purpose',
                'WhatWill',
                'Impact',
                'Visualization',
                'Check',
                'WhoCold',
                'None',
                'Useful',
                'Hindering',
                'Daily',
                'Weekly',
                'Monthly',
                'Yearly',
                'Calendar',
            ],

            form: {
                Date: '',
                LongTermOne: {
                    FamilyGoal: '',
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
                    Check: [],
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
                    FamilyGoal: '',
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
                    FamilyGoal: '',
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
                    Check: [],
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
                    FamilyGoal: '',
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
                    FamilyGoal: '',
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
                    Check: [],
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
                    FamilyGoal: '',
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
                title: "Error",
                variant: variant,
                solid: true
            })
        },

        saveForm() {
            this.show = false;
            let dataBase = "/familyGoals";
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
