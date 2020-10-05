<template>
<div>
    <div>
        <h1>{{$t('Action_Plan.ActionPlan')}}</h1>
        <b-container cols="5">
            <b-tabs content-class="mt-3">
                <b-tab :title="$t('Action_Plan.Spritual')" active>
                    <h1>{{$t('Action_Plan.Spritual')}}</h1>
                    <b-list-group-item class="table-responsive">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.ShortTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.MidTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.LongTermGoal") }}</th>
                                </tr>
                                <tr>
                                    <th scope="col">{{ $t("Action_Plan.Repetition") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th> {{ $t("Action_Plan.Yearly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Yearly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Yearly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Spritual.Yearly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Yearly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Spritual.Yearly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Yearly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Monthly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Monthly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Monthly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Spritual.Monthly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Monthly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Spritual.Monthly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Monthly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Weakly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Weakly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Weakly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Spritual.Weakly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Weakly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Spritual.Weakly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Weakly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Daily") }}</th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Daily.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Daily.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Spritual.Daily.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Daily.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Spritual.Daily.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Spritual.Daily.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                            </tbody>
                        </table>

                    </b-list-group-item>

                </b-tab>
                <b-tab :title="$t('Action_Plan.Social')">
                    <b-list-group-item class="table-responsive">
                        <h1>{{$t('Action_Plan.Social')}}</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.ShortTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.MidTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.LongTermGoal") }}</th>
                                </tr>
                                <tr>
                                    <th scope="col">{{ $t("Action_Plan.Repetition") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th> {{ $t("Action_Plan.Yearly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Social.Yearly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Yearly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Social.Yearly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Yearly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Social.Yearly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Yearly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Monthly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Social.Monthly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Monthly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Social.Monthly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Monthly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Social.Monthly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Monthly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Weakly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Social.Weakly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Weakly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Social.Weakly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Weakly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Social.Weakly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Weakly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Daily") }}</th>
                                    <th style="background-color:white">
                                        {{form.Social.Daily.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Daily.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Social.Daily.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Daily.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Social.Daily.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Social.Daily.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                            </tbody>
                        </table>

                    </b-list-group-item>
                </b-tab>
                <b-tab :title="$t('Action_Plan.Family')">
                    <b-list-group-item class="table-responsive">
                        <h1>{{$t('Action_Plan.Family')}}</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.ShortTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.MidTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.LongTermGoal") }}</th>
                                </tr>
                                <tr>
                                    <th scope="col">{{ $t("Action_Plan.Repetition") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th> {{ $t("Action_Plan.Yearly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Family.Yearly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Yearly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Family.Yearly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Yearly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Family.Yearly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Yearly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Monthly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Family.Monthly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Monthly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Family.Monthly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Monthly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Family.Monthly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Monthly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Weakly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Family.Weakly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Weakly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Family.Weakly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Weakly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Family.Weakly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Weakly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Daily") }}</th>
                                    <th style="background-color:white">
                                        {{form.Family.Daily.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Daily.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Family.Daily.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Daily.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Family.Daily.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Family.Daily.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                            </tbody>
                        </table>

                    </b-list-group-item>
                </b-tab>
                <b-tab :title="$t('Action_Plan.Mental')">
                    <b-list-group-item class="table-responsive">
                        <h1>{{$t('Action_Plan.Mental')}}</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.ShortTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.MidTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.LongTermGoal") }}</th>
                                </tr>
                                <tr>
                                    <th scope="col">{{ $t("Action_Plan.Repetition") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th> {{ $t("Action_Plan.Yearly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Mental.Yearly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Yearly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Mental.Yearly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Yearly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Mental.Yearly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Yearly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Monthly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Mental.Monthly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Monthly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Mental.Monthly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Monthly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Mental.Monthly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Monthly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Weakly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Mental.Weakly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Weakly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Mental.Weakly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Weakly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Mental.Weakly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Weakly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Daily") }}</th>
                                    <th style="background-color:white">
                                        {{form.Mental.Daily.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Daily.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Mental.Daily.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Daily.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Mental.Daily.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Mental.Daily.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                            </tbody>
                        </table>

                    </b-list-group-item>
                </b-tab>
                <b-tab :title="$t('Action_Plan.Finacial')">
                    <b-list-group-item class="table-responsive">
                        <h1>{{$t('Action_Plan.Finacial')}}</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.ShortTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.MidTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.LongTermGoal") }}</th>
                                </tr>
                                <tr>
                                    <th scope="col">{{ $t("Action_Plan.Repetition") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th> {{ $t("Action_Plan.Yearly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Yearly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Yearly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Finacial.Yearly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Yearly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Finacial.Yearly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Yearly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Monthly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Monthly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Monthly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Finacial.Monthly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Monthly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Finacial.Monthly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Monthly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Weakly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Weakly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Weakly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Finacial.Weakly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Weakly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Finacial.Weakly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Weakly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Daily") }}</th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Daily.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Daily.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Finacial.Daily.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Daily.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Finacial.Daily.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Finacial.Daily.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                            </tbody>
                        </table>

                    </b-list-group-item>
                </b-tab>
                <b-tab :title="$t('Action_Plan.Purpose')">
                    <b-list-group-item class="table-responsive">
                        <h1>{{$t('Action_Plan.Purpose')}}</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.ShortTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.MidTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.LongTermGoal") }}</th>
                                </tr>
                                <tr>
                                    <th scope="col">{{ $t("Action_Plan.Repetition") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th> {{ $t("Action_Plan.Yearly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Yearly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Yearly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Purpose.Yearly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Yearly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Purpose.Yearly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Yearly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Monthly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Monthly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Monthly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Purpose.Monthly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Monthly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Purpose.Monthly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Monthly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Weakly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Weakly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Weakly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Purpose.Weakly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Weakly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Purpose.Weakly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Weakly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Daily") }}</th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Daily.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Daily.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Purpose.Daily.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Daily.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Purpose.Daily.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Purpose.Daily.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                            </tbody>
                        </table>

                    </b-list-group-item>
                </b-tab>
                <b-tab :title="$t('Action_Plan.Physical')">
                    <b-list-group-item class="table-responsive">
                        <h1>{{$t('Action_Plan.Physical')}}</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.ShortTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.MidTermGoal") }}</th>
                                    <th class="text-center" colspan="2">{{ $t("Action_Plan.LongTermGoal") }}</th>
                                </tr>
                                <tr>
                                    <th scope="col">{{ $t("Action_Plan.Repetition") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.Goal") }}</th>
                                    <th scope="col">{{ $t("Action_Plan.EssentialActivity") }}</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th> {{ $t("Action_Plan.Yearly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Physical.Yearly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Yearly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Physical.Yearly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Yearly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Physical.Yearly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Yearly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Monthly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Physical.Monthly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Monthly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Physical.Monthly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Monthly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Physical.Monthly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Monthly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Weakly") }}</th>
                                    <th style="background-color:white">
                                        {{form.Physical.Weakly.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Weakly.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Physical.Weakly.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Weakly.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Physical.Weakly.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Weakly.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                                <tr>
                                    <th> {{ $t("Action_Plan.Daily") }}</th>
                                    <th style="background-color:white">
                                        {{form.Physical.Daily.LongTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Daily.LongTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Physical.Daily.MidTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Daily.MidTerm.EssentialActivity}}
                                    </th>

                                    <th style="background-color:white">
                                        {{form.Physical.Daily.ShortTerm.Goal}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.Physical.Daily.ShortTerm.EssentialActivity}}
                                    </th>

                                </tr>

                            </tbody>
                        </table>

                    </b-list-group-item>
                </b-tab>
            </b-tabs>

        </b-container>
    </div>

</div>
</template>

<script>
const {

    getUserData,

} = require("../../assets/js/service");

export default {
    components: {

    },
    mounted: function () {

        let dataBase = '/actionPlans';
        getUserData(dataBase, localStorage.getItem("userToView"), this.token).then(resp => {
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
                Spritual: {
                    Yearly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }

                    },
                    Monthly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Weakly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Daily: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    }
                },
                Social: {
                    Yearly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }

                    },
                    Monthly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Weakly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Daily: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    }
                },
                Family: {
                    Yearly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }

                    },
                    Monthly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Weakly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Daily: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    }
                },
                Mental: {
                    Yearly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }

                    },
                    Monthly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Weakly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Daily: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    }
                },
                Finacial: {
                    Yearly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }

                    },
                    Monthly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Weakly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Daily: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    }
                },
                Purpose: {
                    Yearly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }

                    },
                    Monthly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Weakly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Daily: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    }
                },

                Physical: {
                    Yearly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }

                    },
                    Monthly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Weakly: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    },
                    Daily: {
                        LongTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        MidTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        },
                        ShortTerm: {
                            Goal: '',
                            EssentialActivity: ''
                        }
                    }
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

    }

}
</script>

<style lang="stylus" scoped>

</style>
