<template>
  <div>
    <div>
      <HeaderFile :FirstHeader="$t('Action_Plan.ActionPlan')" />
      <b-container cols="5">
        <b-tabs content-class="mt-3">
          <b-tab :title="$t('Action_Plan.Spritual')" active>
            <h1>{{ $t("Action_Plan.Spritual") }}</h1>
            <b-list-group-item class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.ShortTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.MidTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.LongTermGoal") }}
                    </th>
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
                    <th>{{ $t("Action_Plan.Yearly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Yearly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Yearly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Yearly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Yearly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Yearly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Yearly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Monthly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Monthly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Monthly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Monthly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Monthly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Monthly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Monthly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Weakly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Weakly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Weakly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Weakly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Weakly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Weakly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Weakly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Daily") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Daily.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Daily.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Daily.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Daily.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Daily.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Spritual.Daily.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>
                </tbody>
              </table>
            </b-list-group-item>
          </b-tab>
          <b-tab :title="$t('Action_Plan.Social')">
            <b-list-group-item class="table-responsive">
              <h1>{{ $t("Action_Plan.Social") }}</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.ShortTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.MidTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.LongTermGoal") }}
                    </th>
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
                    <th>{{ $t("Action_Plan.Yearly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Yearly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Yearly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Yearly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Yearly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Yearly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Yearly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Monthly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Monthly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Monthly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Monthly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Monthly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Monthly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Monthly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Weakly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Weakly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Weakly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Weakly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Weakly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Weakly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Weakly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Daily") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Daily.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Daily.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Daily.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Daily.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Daily.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Social.Daily.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>
                </tbody>
              </table>
            </b-list-group-item>
          </b-tab>
          <b-tab :title="$t('Action_Plan.Family')">
            <b-list-group-item class="table-responsive">
              <h1>{{ $t("Action_Plan.Family") }}</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.ShortTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.MidTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.LongTermGoal") }}
                    </th>
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
                    <th>{{ $t("Action_Plan.Yearly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Yearly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Yearly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Yearly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Yearly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Yearly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Yearly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Monthly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Monthly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Monthly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Monthly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Monthly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Monthly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Monthly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Weakly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Weakly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Weakly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Weakly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Weakly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Weakly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Weakly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Daily") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Daily.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Daily.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Daily.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Daily.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Daily.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Family.Daily.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>
                </tbody>
              </table>
            </b-list-group-item>
          </b-tab>
          <b-tab :title="$t('Action_Plan.Mental')">
            <b-list-group-item class="table-responsive">
              <h1>{{ $t("Action_Plan.Mental") }}</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.ShortTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.MidTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.LongTermGoal") }}
                    </th>
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
                    <th>{{ $t("Action_Plan.Yearly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Yearly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Yearly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Yearly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Yearly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Yearly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Yearly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Monthly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Monthly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Monthly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Monthly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Monthly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Monthly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Monthly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Weakly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Weakly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Weakly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Weakly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Weakly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Weakly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Weakly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Daily") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Daily.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Daily.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Daily.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Daily.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Daily.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Mental.Daily.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>
                </tbody>
              </table>
            </b-list-group-item>
          </b-tab>
          <b-tab :title="$t('Action_Plan.Finacial')">
            <b-list-group-item class="table-responsive">
              <h1>{{ $t("Action_Plan.Finacial") }}</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.ShortTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.MidTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.LongTermGoal") }}
                    </th>
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
                    <th>{{ $t("Action_Plan.Yearly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Yearly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Yearly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Yearly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Yearly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Yearly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Yearly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Monthly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Monthly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Monthly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Monthly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Monthly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Monthly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Monthly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Weakly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Weakly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Weakly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Weakly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Weakly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Weakly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Weakly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Daily") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Daily.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Daily.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Daily.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Daily.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Daily.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Finacial.Daily.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>
                </tbody>
              </table>
            </b-list-group-item>
          </b-tab>
          <b-tab :title="$t('Action_Plan.Purpose')">
            <b-list-group-item class="table-responsive">
              <h1>{{ $t("Action_Plan.Purpose") }}</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.ShortTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.MidTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.LongTermGoal") }}
                    </th>
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
                    <th>{{ $t("Action_Plan.Yearly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Yearly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Yearly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Yearly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Yearly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Yearly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Yearly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Monthly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Monthly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Monthly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Monthly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Monthly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Monthly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Monthly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Weakly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Weakly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Weakly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Weakly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Weakly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Weakly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Weakly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Daily") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Daily.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Daily.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Daily.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Daily.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Daily.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Purpose.Daily.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>
                </tbody>
              </table>
            </b-list-group-item>
          </b-tab>
          <b-tab :title="$t('Action_Plan.Physical')">
            <b-list-group-item class="table-responsive">
              <h1>{{ $t("Action_Plan.Physical") }}</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.ShortTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.MidTermGoal") }}
                    </th>
                    <th class="text-center" colspan="2">
                      {{ $t("Action_Plan.LongTermGoal") }}
                    </th>
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
                    <th>{{ $t("Action_Plan.Yearly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Yearly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Yearly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Yearly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Yearly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Yearly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Yearly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Monthly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Monthly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Monthly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Monthly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Monthly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Monthly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Monthly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Weakly") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Weakly.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Weakly.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Weakly.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Weakly.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Weakly.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Weakly.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>

                  <tr>
                    <th>{{ $t("Action_Plan.Daily") }}</th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Daily.LongTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Daily.LongTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Daily.MidTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Daily.MidTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>

                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Daily.ShortTerm.Goal"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                    <th>
                      <b-form-input
                        style="font-size: 12px"
                        v-model="form.Physical.Daily.ShortTerm.EssentialActivity"
                        type="text"
                        required
                        placeholder=""
                      ></b-form-input>
                    </th>
                  </tr>
                </tbody>
              </table>
            </b-list-group-item>
          </b-tab>
        </b-tabs>
        <div class="position-relative row form-check">
          <div class="text-center">
            <button class="btn btn-primary" @click="saveForm()">Save</button><br />
            <div v-if="!show" class="lds-ripple">
              <div></div>
              <div></div>
              loading..
            </div>
          </div>
          <br />
          <div class="text-center">
            <b-button to="/question/mental_goal" variant="outline-success">
              <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button
              :disabled="!submited"
              to="/question/my_new_mental"
              variant="outline-success"
            >
              Next<b-icon icon="arrow-right"></b-icon>
            </b-button>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import HeaderFile from "../../containers/HeaderFile";
const { posts, getUserData, patchData, getUrl } = require("../../assets/js/service");

export default {
  components: {
    HeaderFile,
  },
  mounted: function () {
    let dataBase = "/actionPlans";
    getUserData(dataBase, this.id, this.token)
      .then((resp) => {
        console.log(resp);
        this.form = resp.data;
        this.edit = true;
        this.submited = true;
      })
      .catch((err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          // this.makeToast("", "Wellcome")
        } else if (err.request) {
          this.makeToast("danger", "Connection Problem");
        } else {
          this.makeToast("danger", "Some Error has Happened");
        }
      });
  },
  data() {
    return {
      form: {
        Spritual: {
          Yearly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Monthly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Weakly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Daily: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
        },
        Social: {
          Yearly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Monthly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Weakly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Daily: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
        },
        Family: {
          Yearly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Monthly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Weakly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Daily: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
        },
        Mental: {
          Yearly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Monthly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Weakly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Daily: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
        },
        Finacial: {
          Yearly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Monthly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Weakly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Daily: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
        },
        Purpose: {
          Yearly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Monthly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Weakly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Daily: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
        },

        Physical: {
          Yearly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Monthly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Weakly: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
          Daily: {
            LongTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            MidTerm: {
              Goal: "",
              EssentialActivity: "",
            },
            ShortTerm: {
              Goal: "",
              EssentialActivity: "",
            },
          },
        },
        userId: localStorage.getItem("userId"),
      },
      show: true,
      submited: false,
      token: localStorage.getItem("token"),
      id: localStorage.getItem("userId"),
    };
  },
  methods: {
    makeToast(variant, message) {
      this.$bvToast.toast(message, {
        title: variant,
        variant: variant,
        solid: true,
      });
    },

    saveForm() {
      this.show = false;
      let dataBase = "/actionPlans";
      console.log(this.show);
      if (this.edit) {
        patchData(dataBase, this.token, this.form)
          .then((resp) => {
            console.log(resp);
            this.makeToast("success", "success fully edited your form");
            this.show = true;
          })
          .catch((err) => {
            if (err.response) {
              // client received an error response (5xx, 4xx)
              this.makeToast("danger", "There is a problem with your form");
              this.show = true;
            } else if (err.request) {
              this.makeToast("danger", "Connection Problem");
              this.show = true;
            } else {
              this.makeToast("danger", "Some Error has Happened");
              this.show = true;
            }
          });
      } else {
        posts(dataBase, this.form)
          .then((resp) => {
            console.log(resp.data);
            this.edit = true;
            this.form.MajorLong = "";
            this.form.MajorMid = "";
            this.form.MajorShort = "";
            this.submited = true;
            this.$emit("changeTitle", "vision");
            this.makeToast("success", "success fully submited your form");
            this.show = true;
          })
          .catch((err) => {
            if (err.response) {
              // client received an error response (5xx, 4xx)
              this.makeToast("danger", "There is a problem with your form");
              this.show = true;
            } else if (err.request) {
              this.makeToast("danger", "Connection Problem");
              this.show = true;
            } else {
              this.makeToast("danger", "Some Error has Happened");
              this.show = true;
            }
          });
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
