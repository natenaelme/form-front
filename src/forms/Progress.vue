<template>
  <div role="tablist">
    <HeaderFile :FirstHeader="$t('Common.Progress')" />
    <b-container cols="5">
      <!--How to Search-->
      <b-card no-body class="mb-1">
        <b-card-header
          @click="SilenceTime('/howToSearches')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-1 variant="">{{
            $t("How_To_Search.HowToSearch")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item v-if="view">
              <h3 class="text-center">{{ $t("Common.LastFive") }}</h3>

              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        {{ $t("How_To_Search.4thQuestion.Day") }}
                      </th>
                      <th scope="col">
                        {{ $t("How_To_Search.4thQuestion.Visual") }}
                      </th>
                      <th scope="col">
                        {{ $t("How_To_Search.4thQuestion.Reading") }}
                      </th>
                      <th scope="col">
                        {{ $t("How_To_Search.4thQuestion.Writing") }}
                      </th>
                      <th scope="col">
                        {{ $t("How_To_Search.4thQuestion.Manifestations") }}
                      </th>
                      <th scope="col">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="index in 5" :key="index">
                      <td v-if="HowToSearch[HowToSearch.length - index]">
                        <div>
                          {{ HowToSearch[HowToSearch.length - index].day }}
                        </div>
                      </td>
                      <td v-if="HowToSearch[HowToSearch.length - index]">
                        <div>
                          {{ HowToSearch[HowToSearch.length - index].visual }}
                        </div>
                      </td>
                      <td v-if="HowToSearch[HowToSearch.length - index]">
                        <div>
                          {{ HowToSearch[HowToSearch.length - index].reading }}
                        </div>
                      </td>
                      <td v-if="HowToSearch[HowToSearch.length - index]">
                        <div>
                          {{ HowToSearch[HowToSearch.length - index].writing }}
                        </div>
                      </td>
                      <td v-if="HowToSearch[HowToSearch.length - index]">
                        {{
                          HowToSearch[HowToSearch.length - index].manifestations
                        }}
                      </td>
                      <td v-if="HowToSearch[HowToSearch.length - index]">
                        {{ HowToSearch[HowToSearch.length - index].percent }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="12" v-if="view" style="background-color: white">
                  <div v-for="(item, index) in HowToSearch1" :key="index">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              {{ $t("How_To_Search.4thQuestion.Day") }}
                            </th>
                            <th scope="col">
                              {{ $t("How_To_Search.4thQuestion.Visual") }}
                            </th>
                            <th scope="col">
                              {{ $t("How_To_Search.4thQuestion.Reading") }}
                            </th>
                            <th scope="col">
                              {{ $t("How_To_Search.4thQuestion.Writing") }}
                            </th>
                            <th scope="col">
                              {{
                                $t("How_To_Search.4thQuestion.Manifestations")
                              }}
                            </th>
                            <th scope="col">%</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div>
                                {{ HowToSearch1[0].day }}
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="HowToSearch1[index].visual"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    HowToSearch1[index].visual
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="HowToSearch1[index].reading"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    HowToSearch1[index].reading
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="HowToSearch1[index].writing"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    HowToSearch1[index].writing
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <b-form-input
                                style="font-size: 12px"
                                v-model="HowToSearch1[index].manifestations"
                                type="text"
                                required
                                :placeholder="'manifestations'"
                              ></b-form-input>
                            </td>
                            <td>
                              <b-form-input
                                style="font-size: 12px"
                                v-model="HowToSearch1[index].percent"
                                type="number"
                                required
                              ></b-form-input>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>
            </b-list-group-item>
            <div class="text-center">
              <button
                class="btn btn-primary"
                :disabled="!view"
                @click="saveSilence('/HowToSearches')"
              >
                Save</button
              ><br />
              <div v-if="!show" style="width: 5%" class="lds-ripple">
                <div></div>
                <div></div>
                <span>loading..</span>
              </div>
            </div>
            <br />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header
          @click="SilenceTime('/mentalBanks')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-10 variant="">{{
            $t("Mental_Bank_Ledger.MentalBankLedger")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
        <h3 style="text-align:center">{{$t("Common.LastTask")}}</h3>
          <b-card-body>
            <b-list-group-item v-if="view">
                      <b-list-group-item>
        <b-row>
          <b-col>
            <b-col>{{ $t("Common.Date") }}:{{ mentalBank[len].Date }}</b-col>
          </b-col>
          <b-col>
            <b-col>{{ $t("Mental_Bank_Ledger.goal") }} : {{mentalBank[len].MentalBanckGoal}}</b-col>

          </b-col>
        </b-row>
      </b-list-group-item>
                  <b-list-group-item class="tabel-responsive">
        <table class="table">
          <thead>
            <tr>
              <th class="col-4" style="width: 50%">
                {{ $t("My_New_Mental.Value") }}
              </th>
              <th scope="col">{{ $t("My_New_Mental.Hourly") }}</th>
              <th scope="col">{{ $t("Mental_Bank_Ledger.Hours") }}</th>
              <th scope="col">{{ $t("My_New_Mental.Deposit") }}</th>
            </tr>
          </thead>
          
          <tbody>
            <tr v-for="(item, index) in mentalBank[len].answer1" :key="index">

              <th v-show="mentalBank[len].answer1[index].ValueEvents">
                  {{mentalBank[len].answer1[index].ValueEvents}}
              </th>
              <th>
                {{mentalBank[len].answer1[index].HourlyRate}}
                  
              </th>
              <th>
                <!-- <b-form-input id="input-1" class="normalInput" @change="setDiposit(index)" style="font-size:12px" v-model="mentalBank[len].answer1[index].Hours" type="number" required placeholder=""></b-form-input> -->
                
                  {{mentalBank[len].answer1[index].Hours}}
                  
               
              </th>

              <th>
                {{mentalBank[len].answer1[index].Deposit}}
              </th>
            </tr>
            <tr>
              <th colspan="4">
                <b-col style="text-align: right; padding: 0 !important">
                 
                </b-col>
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.Deposite") }}</th>
              <th colspan="3">
                {{mentalBank[len].TodaysDeposite}}
                 
                
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.Balance") }}</th>
              <th colspan="3">
                {{mentalBank[len].BalanceForward}}
                 
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.NewBalance") }}</th>
              <th colspan="3">
                {{mentalBank[len].NewMbBalance}}
              </th>
            </tr>
          </tbody>
        </table>
            <b-container cols="5">
      <b-list-group-item>
        <b-row>
          <b-col>
            <b-col>{{ $t("Common.Date") }}:{{ form.Daily[0].Date }}</b-col>
          </b-col>
          <b-col>
            <b-col>{{ $t("Mental_Bank_Ledger.goal") }} :</b-col>
            <b-col>
              <b-input
                type="text"
                v-model="form.Daily[0].MentalBanckGoal"
                class="normalInput"
              />
            </b-col>
          </b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item class="tabel-responsive">
        <table class="table">
          <thead>
            <tr>
              <th class="col-4" style="width: 50%">
                {{ $t("My_New_Mental.Value") }}
              </th>
              <th scope="col">{{ $t("My_New_Mental.Hourly") }}</th>
              <th scope="col">{{ $t("Mental_Bank_Ledger.Hours") }}</th>
              <th scope="col">{{ $t("My_New_Mental.Deposit") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in selected" :key="index">
              <th v-show ="!selected[index].ValueEvents">
                <b-form-select
                  style="margin: 0 !important"
                  v-model="selected[index]"
                  @change="ChangeValue(index)"
                  :options="events"
                  size="sm"
                  class="mt-3"
                ></b-form-select>
                
              </th>
              <th v-show ="selected[index].ValueEvents">
                  {{selected[index].ValueEvents}}
              </th>
              <th>
                <b-form-input
                  id="input-1"
                  class="normalInput"
                  disabled
                  style="font-size: 12px"
                  v-model="selected[index].HourlyRate"
                  type="number"
                  required
                  placeholder=""
                ></b-form-input>
              </th>
              <th>
                
                <!-- <b-form-input id="input-1" class="normalInput" @change="setDiposit(index)" style="font-size:12px" v-model="selected[index].Hours" type="number" required placeholder=""></b-form-input> -->
                <input
                  type="number"
                  v-model="selected[index].Hours"
                  @change="test(index)"
                />
              </th>

              <th>
                <b-form-input
                  id="input-1"
                  disabled
                  class="normalInput"
                  style="font-size: 12px"
                  v-model="Diposit[index]"
                  type="number"
                  required
                  placeholder=""
                ></b-form-input>
              </th>
            </tr>
            <tr>
              <th colspan="4">
                <b-col style="text-align: right; padding: 0 !important">
                  <b-button
                    variant="danger"
                    v-on:click="
                      selected.push({
                        FlatRate: null,
                        HourlyRate: null,
                        ValueEvents: null,
                        Diposit: null,
                        Hours: null,
                      })
                    "
                    >+</b-button
                  >
                </b-col>
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.Deposite") }}</th>
              <th colspan="3">
                <b-input
                  disabled
                  v-model="form.Daily[0].TodaysDeposite"
                  class="normalInput"
                  type="text"
                />
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.Balance") }}</th>
              <th colspan="3">
                <b-input
                  disabled
                  v-model="form.Daily[0].BalanceForward"
                  class="normalInput"
                  type="text"
                />
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.NewBalance") }}</th>
              <th colspan="3">
                <b-input
                  disabled
                  v-model="form.Daily[0].NewMbBalance"
                  class="normalInput"
                  type="text"
                />
              </th>
            </tr>
          </tbody>
        </table>
      </b-list-group-item>

      <div class="position-relative row form-check">
        <div class="text-center">

          <button class="btn btn-primary" @click="saveMental()">Save</button
          ><br />
          <div v-if="!show" style="width:8%" class="lds-ripple">
            <div></div>
            <div></div>
            loading..
          </div>
        </div>
        <br />

      </div>
    </b-container>
      </b-list-group-item>
            </b-list-group-item>
            <b-col md="12" v-if="!view" style="background-color: white">
              <div>
                <h6 style="color: red" class="text-center">
                  You Have To Fill The Form First
                </h6>
              </div>
            </b-col>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!--habit building-->
      <b-card no-body class="mb-1">
        <b-card-header
          @click="viewTables('/habitSelfImages')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-2 variant="">{{
            $t("Habit.HabitControl")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item>
              <h3 class="text-center">{{ $t("Common.LastFive") }}</h3>

              <b-row v-for="index in 5" :key="index">
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ $t("Common.Day") + (Daily_Rep.length - index + 1) }}
                </b-col>
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ Daily_Rep[Daily_Rep.length - index] }}
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item v-if="view">
              <b-row>
                <b-col md="11" style="background-color: white">
                  <div v-for="(item, index) in Daily_Rep1" :key="index">
                    <div>
                      <div>
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="Daily_Rep1[index]"
                          name="checkbox-1"
                          value="Completed"
                          unchecked-value="not completed"
                        >
                          {{ "Day " + (Daily_Rep.length + (index + 1)) + " : "
                          }}{{ $t("Common.Completed") }}
                        </b-form-checkbox>
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>
            </b-list-group-item>
            <div class="text-center">
              <button
                class="btn btn-primary"
                @click="saveForm('/Habit_Self_images/')"
              >
                Save</button
              ><br />
              <div v-if="!show" style="width: 5%" class="lds-ripple">
                <div></div>
                <div></div>
                <span>loading..</span>
              </div>
            </div>
            <br />
          </b-card-body>
        </b-collapse>
      </b-card>

      <!-- how to build-->
      <b-card no-body class="mb-1">
        <b-card-header
          @click="viewTables('/howToBuilds')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-3 variant="">{{
            $t("How_To_Build.HowToBuild")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item v-if="view">
              <h3 class="text-center">{{ $t("Common.LastFive") }}</h3>

              <b-row v-for="index in 5" :key="index">
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ $t("Common.Day") + (Daily_Rep.length - index + 1) }}
                </b-col>
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ Daily_Rep[Daily_Rep.length - index] }}
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="11" style="background-color: white">
                  <div v-for="(item, index) in Daily_Rep1" :key="index">
                    <div>
                      <div>
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="Daily_Rep1[index]"
                          name="checkbox-1"
                          value="Completed"
                          unchecked-value="not completed"
                        >
                          {{ "Day " + (Daily_Rep.length + (index + 1)) + " : "
                          }}{{ $t("Common.Completed") }}
                        </b-form-checkbox>
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>

              <div class="text-center">
                <button
                  class="btn btn-primary"
                  @click="saveForm('/HowToBuilds/')"
                >
                  Save</button
                ><br />
                <div v-if="!show" style="width: 5%" class="lds-ripple">
                  <div></div>
                  <div></div>
                  <span>loading..</span>
                </div>
              </div>
              <br />
            </b-list-group-item>
          </b-card-body>
        </b-collapse>
      </b-card>

      <!-- process of change -->
      <b-card no-body class="mb-1">
        <b-card-header
          @click="viewTables('/processOfChanges')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-4 variant="">{{
            $t("Process_Of_Change.ProcessOfChange")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item>
              <h3 class="text-center">{{ $t("Common.LastFive") }}</h3>

              <b-row v-for="index in 5" :key="index">
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ $t("Common.Day") + (Daily_Rep.length - index + 1) }}
                </b-col>
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ Daily_Rep[Daily_Rep.length - index] }}
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item v-if="view">
              <b-row>
                <b-col md="11" style="background-color: white">
                  <div v-for="(item, index) in Daily_Rep1" :key="index">
                    <div>
                      <div>
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="Daily_Rep1[index]"
                          name="checkbox-1"
                          value="Completed"
                          unchecked-value="not completed"
                        >
                          {{ "Day " + (Daily_Rep.length + (index + 1)) + " : "
                          }}{{ $t("Common.Completed") }}
                        </b-form-checkbox>
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>
            </b-list-group-item>
            <div class="text-center">
              <button
                class="btn btn-primary"
                @click="saveForm('/ProcessOfChanges/')"
              >
                Save</button
              ><br />
              <div v-if="!show" style="width: 5%" class="lds-ripple">
                <div></div>
                <div></div>
                <span>loading..</span>
              </div>
            </div>
            <br />
          </b-card-body>
        </b-collapse>
      </b-card>

      <!-- Silence Time -->
      <b-card no-body class="mb-1">
        <b-card-header
          @click="SilenceTime('/silenceTimes')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-5 variant="">{{
            $t("Silence_Time.SilenceTime")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item v-if="view">
              <h3 class="text-center">{{ $t("Common.LastFive") }}</h3>

              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">{{ $t("Common.Date") }}</th>
                      <th scope="col">{{ $t("Common.Visual") }}</th>
                      <th scope="col">{{ $t("Common.Gratitude") }}</th>
                      <th scope="col">{{ $t("Common.MentalBank") }}</th>
                      <th scope="col">{{ $t("Common.Remarks") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="index in 5" :key="index">
                      <td v-if="Silence[Silence.length - index]">
                        <div>
                          {{ Silence[Silence.length - index].date }}
                        </div>
                      </td>
                      <td v-if="Silence[Silence.length - index]">
                        <div>
                          {{ Silence[Silence.length - index].visual }}
                        </div>
                      </td>
                      <td v-if="Silence[Silence.length - index]">
                        <div>
                          {{ Silence[Silence.length - index].gratitude }}
                        </div>
                      </td>
                      <td v-if="Silence[Silence.length - index]">
                        <div>
                          {{ Silence[Silence.length - index].mentalBank }}
                        </div>
                      </td>
                      <td v-if="Silence[Silence.length - index]">
                        {{ Silence[Silence.length - index].remarks }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="11" v-if="view" style="background-color: white">
                  <div v-for="(item, index) in Silence1" :key="index">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">{{ $t("Common.Date") }}</th>
                            <th scope="col">{{ $t("Common.Visual") }}</th>
                            <th scope="col">{{ $t("Common.Gratitude") }}</th>
                            <th scope="col">{{ $t("Common.MentalBank") }}</th>
                            <th scope="col">{{ $t("Common.Remarks") }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div>
                                <b-form-input
                                  id="input-1"
                                  style="font-size: 12px"
                                  v-model="Silence1[index].date"
                                  type="date"
                                  required
                                ></b-form-input>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="Silence1[index].visual"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{ Silence1[index].visual }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="Silence1[index].gratitude"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    Silence1[index].gratitude
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="Silence1[index].mentalBank"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    Silence1[index].mentalBank
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <b-form-input
                                style="font-size: 12px"
                                v-model="Silence1[index].remarks"
                                type="text"
                                required
                                :placeholder="'Remarks'"
                              ></b-form-input>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>
            </b-list-group-item>
            <div class="text-center">
              <button
                class="btn btn-primary"
                :disabled="!view"
                @click="saveSilence('/SilenceTimes/')"
              >
                Save</button
              ><br />
              <div v-if="!show" style="width: 5%" class="lds-ripple">
                <div></div>
                <div></div>
                <span>loading..</span>
              </div>
            </div>
            <br />
          </b-card-body>
        </b-collapse>
      </b-card>

      <!-- Alpha Displine -->

      <b-card no-body class="mb-1">
        <b-card-header
          @click="SilenceTime('/alphaDisciplines')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-6 variant="">{{
            $t("Alpha_Discipline.AlphaDiscipline")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item v-if="view">
              <h3 class="text-center">{{ $t("Common.LastFive") }}</h3>

              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">{{ $t("Common.Date") }}</th>
                      <th scope="col">{{ $t("Common.Morning") }}</th>
                      <th scope="col">{{ $t("Common.MidDay") }}</th>
                      <th scope="col">{{ $t("Common.Evening") }}</th>
                      <th scope="col">{{ $t("Common.Remarks") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="index in 5" :key="index">
                      <td v-if="AlphaDispline[AlphaDispline.length - index]">
                        <div>
                          {{ AlphaDispline[AlphaDispline.length - index].date }}
                        </div>
                      </td>
                      <td v-if="AlphaDispline[AlphaDispline.length - index]">
                        <div>
                          {{
                            AlphaDispline[AlphaDispline.length - index].morning
                          }}
                        </div>
                      </td>
                      <td v-if="AlphaDispline[AlphaDispline.length - index]">
                        <div>
                          {{
                            AlphaDispline[AlphaDispline.length - index].midDay
                          }}
                        </div>
                      </td>
                      <td v-if="AlphaDispline[AlphaDispline.length - index]">
                        <div>
                          {{
                            AlphaDispline[AlphaDispline.length - index].evening
                          }}
                        </div>
                      </td>
                      <td v-if="AlphaDispline[AlphaDispline.length - index]">
                        {{
                          AlphaDispline[AlphaDispline.length - index].remarks
                        }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="11" v-if="view" style="background-color: white">
                  <div v-for="(item, index) in Silence1" :key="index">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">{{ $t("Common.Date") }}</th>
                            <th scope="col">{{ $t("Common.Morning") }}</th>
                            <th scope="col">{{ $t("Common.MidDay") }}</th>
                            <th scope="col">{{ $t("Common.Evening") }}</th>
                            <th scope="col">{{ $t("Common.Remarks") }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div>
                                <b-form-input
                                  id="input-1"
                                  style="font-size: 12px"
                                  v-model="AlphaDispline1[index].date"
                                  type="date"
                                  required
                                ></b-form-input>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="AlphaDispline1[index].morning"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    AlphaDispline1[index].morning
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="AlphaDispline1[index].midDay"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    AlphaDispline1[index].midDay
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="AlphaDispline1[index].evening"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    AlphaDispline1[index].evening
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <b-form-input
                                style="font-size: 12px"
                                v-model="AlphaDispline1[index].remarks"
                                type="text"
                                required
                                :placeholder="'Remarks'"
                              ></b-form-input>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>
            </b-list-group-item>
            <div class="text-center">
              <button
                class="btn btn-primary"
                :disabled="!view"
                @click="saveSilence('/AlphaDisciplines/')"
              >
                Save</button
              ><br />
              <div v-if="!show" style="width: 5%" class="lds-ripple">
                <div></div>
                <div></div>
                <span>loading..</span>
              </div>
            </div>
            <br />
          </b-card-body>
        </b-collapse>
      </b-card>

      <!--Alpha Responsibility-->
      <b-card no-body class="mb-1">
        <b-card-header
          @click="SilenceTime('/alphaResponsibilities')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-7 variant="">{{
            $t("Alpha_Responsibility.AlphaResponsibility")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item v-if="view">
              <h3 class="text-center">{{ $t("Common.LastFive") }}</h3>

              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">{{ $t("Common.Date") }}</th>
                      <th scope="col">{{ $t("Common.Morning") }}</th>
                      <th scope="col">{{ $t("Common.MidDay") }}</th>
                      <th scope="col">{{ $t("Common.Evening") }}</th>
                      <th scope="col">{{ $t("Common.Remarks") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="index in 5" :key="index">
                      <td
                        v-if="
                          AlphaResponsibility[
                            AlphaResponsibility.length - index
                          ]
                        "
                      >
                        <div>
                          {{
                            AlphaResponsibility[
                              AlphaResponsibility.length - index
                            ].date
                          }}
                        </div>
                      </td>
                      <td
                        v-if="
                          AlphaResponsibility[
                            AlphaResponsibility.length - index
                          ]
                        "
                      >
                        <div>
                          {{
                            AlphaResponsibility[
                              AlphaResponsibility.length - index
                            ].morning
                          }}
                        </div>
                      </td>
                      <td
                        v-if="
                          AlphaResponsibility[
                            AlphaResponsibility.length - index
                          ]
                        "
                      >
                        <div>
                          {{
                            AlphaResponsibility[
                              AlphaResponsibility.length - index
                            ].midDay
                          }}
                        </div>
                      </td>
                      <td
                        v-if="
                          AlphaResponsibility[
                            AlphaResponsibility.length - index
                          ]
                        "
                      >
                        <div>
                          {{
                            AlphaResponsibility[
                              AlphaResponsibility.length - index
                            ].evening
                          }}
                        </div>
                      </td>
                      <td
                        v-if="
                          AlphaResponsibility[
                            AlphaResponsibility.length - index
                          ]
                        "
                      >
                        {{
                          AlphaResponsibility[
                            AlphaResponsibility.length - index
                          ].remarks
                        }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="11" v-if="view" style="background-color: white">
                  <div v-for="(item, index) in Silence1" :key="index">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">{{ $t("Common.Date") }}</th>
                            <th scope="col">{{ $t("Common.Morning") }}</th>
                            <th scope="col">{{ $t("Common.MidDay") }}</th>
                            <th scope="col">{{ $t("Common.Evening") }}</th>
                            <th scope="col">{{ $t("Common.Remarks") }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div>
                                <b-form-input
                                  id="input-1"
                                  style="font-size: 12px"
                                  v-model="AlphaResponsibility1[index].date"
                                  type="date"
                                  required
                                ></b-form-input>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="AlphaResponsibility1[index].morning"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    AlphaResponsibility1[index].morning
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="AlphaResponsibility1[index].midDay"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    AlphaResponsibility1[index].midDay
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <b-form-checkbox
                                  v-model="AlphaResponsibility1[index].evening"
                                  value="Completed"
                                  unchecked-value="not completed"
                                >
                                  {{ $t("Completed") }}
                                </b-form-checkbox>

                                <div>
                                  State:
                                  <strong>{{
                                    AlphaResponsibility1[index].evening
                                  }}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              <b-form-input
                                style="font-size: 12px"
                                v-model="AlphaResponsibility1[index].remarks"
                                type="text"
                                required
                                :placeholder="'Remarks'"
                              ></b-form-input>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>
            </b-list-group-item>
            <div class="text-center">
              <button
                class="btn btn-primary"
                :disabled="!view"
                @click="saveSilence('/AlphaResponsibilities/')"
              >
                Save</button
              ><br />
              <div v-if="!show" style="width: 5%" class="lds-ripple">
                <div></div>
                <div></div>
                <span>loading..</span>
              </div>
            </div>
            <br />
          </b-card-body>
        </b-collapse>
      </b-card>

      <!--gratitude journal-->
      <b-card no-body class="mb-1">
        <b-card-header
          @click="SilenceTime('/gratitudeJournals')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-8 variant="">{{
            $t("Gratitude_Journal.GratitudeJournal")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item v-if="view">
              <h3 class="text-center">{{ $t("Common.GournalProgress") }}</h3>
              <p>
                {{ $t("Common.YouCompleted") }} {{ Gratitude.length }}
                {{ $t("Common.Page") }}
              </p>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="11" v-if="view" style="background-color: white">
                  <div v-for="(date, index) in Gratitude1" :key="index">
                    <b-list-group-item>
                      <b-row>
                        <b-col md="6" v-for="item in 50" :key="item">
                          <b-row>
                            <b-col md="12">
                              <b-form-input
                                id="input-2"
                                style="font-size: 12px"
                                v-model="Gratitude1.Daily_Rep[0][item - 1]"
                                type="text"
                                required
                                :placeholder="`point ` + item"
                              ></b-form-input>
                              <br />
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-row>
                    </b-list-group-item>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>
            </b-list-group-item>
            <div class="text-center">
              <button
                class="btn btn-primary"
                :disabled="!view"
                @click="saveSilence('/GratitudeJournals/')"
              >
                Save</button
              ><br />
              <div v-if="!show" style="width: 5%" class="lds-ripple">
                <div></div>
                <div></div>
                <span>loading..</span>
              </div>
            </div>
            <br />
          </b-card-body>
        </b-collapse>
      </b-card>

      <!--Alpha Belief-->
      <b-card no-body class="mb-1">
        <b-card-header
          @click="viewTables('/alphaBeliefs')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-9 variant="">{{
            $t("Alpha_Belief.AlphaBelief")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item v-if="view">
              <h3 class="text-center">{{ $t("Common.LastFive") }}</h3>

              <b-row v-for="index in 5" :key="index">
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ $t("Common.Day") + (Daily_Rep.length - index + 1) }}
                </b-col>
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ Daily_Rep[Daily_Rep.length - index] }}
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="11" style="background-color: white">
                  <div v-for="(item, index) in Daily_Rep1" :key="index">
                    <div>
                      <div>
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="Daily_Rep1[index]"
                          name="checkbox-1"
                          value="Completed"
                          unchecked-value="not completed"
                        >
                          {{ "Day " + (Daily_Rep.length + (index + 1)) + " : "
                          }}{{ $t("Common.Completed") }}
                        </b-form-checkbox>
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>

              <div class="text-center">
                <button
                  class="btn btn-primary"
                  @click="saveForm('/AlphaBeliefs/')"
                >
                  Save</button
                ><br />
                <div v-if="!show" style="width: 5%" class="lds-ripple">
                  <div></div>
                  <div></div>
                  <span>loading..</span>
                </div>
              </div>
              <br />
            </b-list-group-item>
          </b-card-body>
        </b-collapse>
      </b-card>

      <!--Six Steps-->

      <b-card no-body class="mb-1">
        <b-card-header
          @click="viewTables('/sixSteps')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-10 variant="">{{
            $t("Six_Steps.SixSteps")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item v-if="view">
              <h3 class="text-center">{{ $t("Common.LastFive") }}</h3>

              <b-row v-for="index in 5" :key="index">
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ $t("Common.Day") + (Daily_Rep.length - index + 1) }}
                </b-col>
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ Daily_Rep[Daily_Rep.length - index] }}
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="11" style="background-color: white">
                  <div v-for="(item, index) in Daily_Rep1" :key="index">
                    <div>
                      <div>
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="Daily_Rep1[index]"
                          name="checkbox-1"
                          value="Completed"
                          unchecked-value="not completed"
                        >
                          {{ "Day " + (Daily_Rep.length + (index + 1)) + " : "
                          }}{{ $t("Common.Completed") }}
                        </b-form-checkbox>
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>

              <div class="text-center">
                <button class="btn btn-primary" @click="saveForm('/SixSteps/')">
                  Save</button
                ><br />
                <div v-if="!show" style="width: 5%" class="lds-ripple">
                  <div></div>
                  <div></div>
                  <span>loading..</span>
                </div>
              </div>
              <br />
            </b-list-group-item>
          </b-card-body>
        </b-collapse>
      </b-card>

      <!--fourth attribute-->
      <b-card no-body class="mb-1">
        <b-card-header
          @click="viewTables('/fourattributes')"
          header-tag="header"
          class="p-1"
          role="tab"
        >
          <b-button block v-b-toggle.accordion-11 variant="">{{
            $t("Four_Attributes.FourAttributes")
          }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-11" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-list-group-item v-if="view">
              <h3 class="text-center">{{ $t("Common.LastFive") }}</h3>

              <b-row v-for="index in 5" :key="index">
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ $t("Common.Day") + (Daily_Rep.length - index + 1) }}
                </b-col>
                <b-col v-if="Daily_Rep[Daily_Rep.length - index]">
                  {{ Daily_Rep[Daily_Rep.length - index] }}
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="11" style="background-color: white" v-if="view">
                  <div v-for="(item, index) in Daily_Rep1" :key="index">
                    <div>
                      <div>
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="Daily_Rep1[index]"
                          name="checkbox-1"
                          value="Completed"
                          unchecked-value="not completed"
                        >
                          {{ "Day " + (Daily_Rep.length + (index + 1)) + " : "
                          }}{{ $t("Common.Completed") }}
                        </b-form-checkbox>
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col md="12" v-if="!view" style="background-color: white">
                  <div>
                    <h6 style="color: red" class="text-center">
                      You Have To Fill The Form First
                    </h6>
                  </div>
                </b-col>
              </b-row>

              <div class="text-center">
                <button
                  class="btn btn-primary"
                  @click="saveForm('/FourAttributes/')"
                >
                  Save</button
                ><br />
                <div v-if="!show" style="width: 5%" class="lds-ripple">
                  <div></div>
                  <div></div>
                  <span>loading..</span>
                </div>
              </div>
              <br />
            </b-list-group-item>
          </b-card-body>
        </b-collapse>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import HeaderFile from "../containers/HeaderFile";
import Vue from "vue";
const {
  getUserData,
  getUserDataInclude,
  patchData,
} = require("../assets/js/service");
export default {
  components: {
    HeaderFile,
  },
  data() {
    return {
    lastData:null,
    Diposit: [],
          selected: [
        {
          FlatRate: null,
          HourlyRate: null,
          ValueEvents: null,
          Diposit: null,
          Hours: null,
        },
      ],
      form: {
        
        Daily: [
          {
            Date: null,
            MentalBanckGoal: null,
            MentalBank: null,
            TodaysDeposite:null,
            answer1: [
              {
                ValueEvents: "",
                HourlyRate: "",
                Hours: "",
                Deposit: "",
              },
            ],
          },
        ],
        
        BalanceForward:0,
        NewMbBalance: null,
        Newmental: null,
        Affirmation: null,
        Happennings: null,
        userId: localStorage.getItem("userId"),
      },
      Daily_Rep: {},
      Daily_Rep1: [""],
      Silence: [],
      Silence1: [
        {
          date: "",
          visual: "",
          gratitude: "",
          mentalBank: "",
          remarks: "",
        },
      ],
      AlphaDispline: [],
      AlphaDispline1: [
        {
          date: "",
          morning: "",
          midDay: "",
          evening: "",
          remarks: "",
        },
      ],
      AlphaResponsibility: [],
      Gratitude: [],
      Gratitude1: {
        Daily_Rep: [{}],
      },
      HowToSearch: [],
      HowToSearch1: [
        {
          day: "",
          visual: "",
          reading: "",
          writing: "",
          manifestations: "",
          percent: "",
        },
      ],
      AlphaResponsibility1: [
        {
          date: "",
          morning: "",
          midDay: "",
          evening: "",
          remarks: "",
        },
      ],

      Data: "",
      show: true,
      id: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      view: true,
      events: null,
      len: 0,
      mentalBank: [""],
    };
  },
  mounted() {
    let data = "/myNewMentals";
    getUserData(data, this.id, this.token).then((resp) => {
      this.events = resp.data.answer1.map((evn) => {
        return { value: evn, text: evn.ValueEvents };
      });
    });
  },
  methods: {
    makeToast(variant, message) {
      this.$bvToast.toast(message, {
        title: variant,
        variant: variant,
        solid: true,
        view: true,
      });
    },
    SilenceTime(value) {
      this.show = false;
      this.view = true;
      let dataBase = value;
      getUserData(dataBase, this.id, this.token)
        .then((resp) => {
          console.log(resp.data.Daily_Rep);
          if (value == "/alphaDisciplines") {
            this.AlphaDispline = resp.data.answerForq3;
            this.Data = resp.data;
            this.show = true;
          } else if (value == "/alphaResponsibilities") {
            this.AlphaResponsibility = resp.data.answerForq4;
            this.Data = resp.data;
            this.show = true;
          } else if (value == "/gratitudeJournals") {
            this.Gratitude = resp.data.Daily_Rep;

            this.Data = resp.data;
            this.show = true;
          } else if (value == "/howToSearches") {
            this.HowToSearch = resp.data.answerForq4;
            this.HowToSearch1[0].day = this.HowToSearch.length + 1;
            this.Data = resp.data;
            this.show = true;
          } else if (value == "/mentalBanks") {
            var formatted_date = new Date()
              .toJSON()
              .slice(0, 10)
              .replace(/-/g, "/");
                          this.Data = resp.data;
                          console.log(this.Data);
            this.show = true;
            // this.mentalBank.Daily[this.len].Date = formatted_date;
            this.mentalBank = resp.data.Daily;
            this.len = resp.data.Daily.length - 1;
            console.log("len len len len len " + this.len);
            var formatted_date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
                    console.log("asdfghjkl");

            this.form.Daily[0].Date = formatted_date;

            this.lastData = resp.data;
          } else {
            this.Silence = resp.data.answerForq3;
            this.Data = resp.data;
            this.show = true;
          }
        })
        .catch((err) => {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            this.view = false;
            this.show = true;
            this.makeToast(
              "danger",
              "You Have To Fill The Form First Before the Progress"
            );
            console.log(this.view);
          } else if (err.request) {
            this.makeToast("danger", "Connection Problem");
          } else {
              console.log("fghjkhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
            this.makeToast("danger", "Some Error has Happened");
          }
        });
    },

    viewTables(value) {
      this.Daily_Rep = {};
      this.show = false;
      this.view = true;
      let dataBase = value;

      getUserData(dataBase, this.id, this.token)
        .then((resp) => {
          console.log(resp);
          this.Daily_Rep = resp.data.Daily_Rep;
          this.Data = resp.data;
          this.show = true;
        })
        .catch((err) => {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            this.view = false;
            this.show = true;
            this.makeToast(
              "danger",
              "You Have To Fill The Form First Before the Progress"
            );
            console.log(this.view);
          } else if (err.request) {
            this.makeToast("danger", "Connection Problem");
          } else {
            this.makeToast("danger", "Some Error has Happened");
          }
        });
    },
    saveForm(value) {
      let dataBase = value;

      console.log(this.Data.Daily_Rep.length);
      this.Data.Daily_Rep[this.Data.Daily_Rep.length] = this.Daily_Rep1[0];
      patchData(dataBase, this.token, this.Data)
        .then((resp) => {
          this.view = true;
          console.log("success");
          console.log(resp);
          this.Daily_Rep = resp.data.Daily_Rep;
          this.Daily_Rep1 = [""];
          this.makeToast(
            "success",
            "success fully updated your daily activity"
          );
        })
        .catch((err) => {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            this.makeToast("danger", "Error with the Form");
            this.view = false;
          } else if (err.request) {
            this.makeToast("danger", "Connection Problem");
          } else {
            this.makeToast("danger", "Some Error has Happened");
          }
        });
    },
    saveSilence(value) {
      let dataBase = value;

      var currentDate = new Date();
      console.log(currentDate);
      var formatted_date = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
      let ValueDate;
      console.log(formatted_date);
      console.log(this.Silence1[0].date);
      if (value == "/AlphaDisciplines/") {
        this.Data.answerForq3[
          this.Data.answerForq3.length
        ] = this.AlphaDispline1[0];
        ValueDate = this.AlphaDispline1[0].date;
      } else if (value == "/AlphaResponsibilities/") {
        this.Data.answerForq4[
          this.Data.answerForq4.length
        ] = this.AlphaResponsibility1[0];
        ValueDate = this.AlphaResponsibility1[0].date;
      } else if (value == "/GratitudeJournals/") {
        this.Data.Daily_Rep[
          this.Data.Daily_Rep.length
        ] = this.Gratitude1.Daily_Rep[0];
        this.Gratitude1 = this.Gratitude1 = {
          Daily_Rep: [{}],
        };
        ValueDate = 0;
      } else if (value == "/HowToSearches") {
        this.Data.answerForq4[
          this.Data.answerForq4.length
        ] = this.HowToSearch1[0];
        ValueDate = 0;
      } else {
        this.Data.answerForq3[this.Data.answerForq3.length] = this.Silence1[0];
        ValueDate = this.Silence1[0].date;
      }
      if (formatted_date > ValueDate || ValueDate == 0) {
        console.log(value);

        patchData(dataBase, this.token, this.Data)
          .then((resp) => {
            this.view = true;
            console.log("success");
            console.log(resp);
            if (value == "/AlphaDisciplines/") {
              this.AlphaDispline1 = [
                {
                  date: "",
                  morning: "",
                  midDay: "",
                  evening: "",
                  remarks: "",
                },
              ];
              // AlphaDispline = resp.data.answerForq3;
            } else if (value == "/AlphaResponsibilities/") {
              this.AlphaResponsibility1 = [
                {
                  date: "",
                  morning: "",
                  midDay: "",
                  evening: "",
                  remarks: "",
                },
              ];
              // AlphaResponsibility = resp.data.answerForq4;
            } else if (value == "/GratitudeJournals/") {
              this.Gratitude = resp.data.Daily_Rep;
            } else if (value == "/HowToSearches") {
              this.HowToSearch = resp.data.answerForq4;

              this.HowToSearch1 = [
                {
                  visual: "",
                  reading: "",
                  writing: "",
                  manifestations: "",
                  percent: "",
                },
              ];
              this.HowToSearch1[0].day = this.HowToSearch.length + 1;
            } else {
              this.Silence1 = [
                {
                  date: "",
                  visual: "",
                  gratitude: "",
                  mentalBank: "",
                  remarks: "",
                },
              ];
              this.Silence = resp.data.answerForq3;
            }

            this.makeToast(
              "success",
              "success fully updated your daily activity"
            );
          })
          .catch((err) => {
            if (err.response) {
              // client received an error response (5xx, 4xx)
              this.makeToast("danger", "Error with the Form");
              this.view = false;
            } else if (err.request) {
              this.makeToast("danger", "Connection Problem");
            } else {
              this.makeToast("danger", "Some Error has Happened");
            }
          });
      } else {
        this.makeToast(
          "danger",
          "You can only input a Progress till the current Date"
        );
      }
    },


    ChangeValue(ind){
        var event = [];

        this.events.forEach((value,index)=>{
            if(value.value == this.selected[ind]){
                let sel =value;
                sel.disabled= true;
                event.push(sel)

            }else{
                event.push(value);
            }
        })
        this.events = event;
        console.log(this.selected[ind].FlatRate);
      if (this.selected[ind].FlatRate) {
                Vue.set(
          this.Diposit,
          ind,
          this.selected[ind].FlatRate
        );
              let sum = 0;
      this.Diposit.forEach((value, index) => {
        sum = sum + parseInt(value);
      });
      this.form.Daily[0].TodaysDeposite = sum;
      this.form.Daily[0].NewMbBalance = sum + parseInt(this.lastDepo);
               this.form.Daily[0].BalanceForward = this.lastData.Daily[this.lastData.Daily.length - 1].NewMbBalance;
        this.form.Daily[0].NewMbBalance = sum + this.form.Daily[0].BalanceForward;
      }
    },
    test(index) {
      console.log("testetetettetettetetetetetet");
      console.log(this.selected[index].HourlyRate)
      if (this.selected[index].HourlyRate) {
        this.form.Daily[0].answer1[index] = {
          ValueEvents: this.selected[index].ValueEvents,
          HourlyRate: this.selected[index].HourlyRate,
          Hours: this.selected[index].Hours,
          Deposit:
            parseInt(this.selected[index].HourlyRate) *
            parseInt(this.selected[index].Hours),
        };

        Vue.set(
          this.Diposit,
          index,
          parseInt(this.selected[index].HourlyRate) *
            parseInt(this.selected[index].Hours)
        );
      }
      if (this.selected[index].FlatRate) {
        Vue.set(this.Diposit, index, this.selected[index].FlatRate);
      }
      let sum = 0;
      this.Diposit.forEach((value, index) => {
        sum = sum + parseInt(value);
      });
      this.form.Daily[0].TodaysDeposite = sum;
      this.form.Daily[0].NewMbBalance = sum + this.lastDepo;
      console.log("dfghjklsdfghjkldfghjk");
      console.log(this.lastData.Daily.length - 1);
      if(this.lastData.Daily.length > 0){

        this.form.Daily[0].BalanceForward = this.lastData.Daily[this.lastData.Daily.length - 1].NewMbBalance;
        this.form.Daily[0].NewMbBalance = sum + this.form.Daily[0].BalanceForward;
      }else{
         this.form.Daily[0].BalanceForward = 0; 
      }
      
    },
    setDiposit(index) {
      console.log("sdfghjkl;");
      if (this.selected[index].HourlyRate) {
        this.selected[index].Diposit =
          this.selected[index].HourlyRate * this.selected[index].Hours;
      }
      if (this.selected[index].FlatRate) {
        this.selected[index].Diposit = this.selected[index].FlatRate;
      }
    },
    saveMental() {
      this.show = false;
      let dataBase = "/mentalBanks";

      var newDayData = this.form.Daily[0];
      console.log("the last data");
      this.lastData.Daily.push(newDayData);
        console.log(this.lastData);
        patchData(dataBase,this.token,this.lastData).then((resp)=>{
                this.form= {
        
        Daily: [
          {
            Date: null,
            MentalBanckGoal: null,
            MentalBank: null,
            TodaysDeposite:null,
            answer1: [
              {
                ValueEvents: "",
                HourlyRate: "",
                Hours: "",
                Deposit: "",
              },
            ],
          },
        ],
        
        BalanceForward:0,
        NewMbBalance: null,
        Newmental: null,
        Affirmation: null,
        Happennings: null,
      };
      this.Diposit = [];
      this.selected = [
        {
          FlatRate: null,
          HourlyRate: null,
          ValueEvents: null,
          Diposit: null,
          Hours: null,
        },
      ];
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

    },
  },
};
</script>
