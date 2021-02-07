import Vue from "vue";
import Router from "vue-router";


//forms

// Vision
const HowToSearch=() => import("@/forms/VIsion/HowToSearch");
const PersonalInformation=() => import("@/forms/VIsion/PersonalInformation");
const MyLife=() => import("@/forms/VIsion/MyLife");
const MyDreamBoard=() => import("@/forms/VIsion/MyDreamBoard");
const MyHouse=() => import("@/forms/VIsion/MyHouse");
const SocalDream=() => import("@/forms/VIsion/SocalDream");
const Mymental=() => import("@/forms/VIsion/MyMental");
const Spirtual=() => import("@/forms/VIsion/Spirtual");
const Service=() => import("@/forms/VIsion/Service");
const Family=() => import("@/forms/VIsion/Family");
const Physical=() => import("@/forms/VIsion/Physical");
const Financial=() => import("@/forms/VIsion/Financial");
const Car=() => import("@/forms/VIsion/MyCar");
const UsePosetive=() => import("@/forms/VIsion/UsePosetive");
const FinancialGoal=() => import("@/forms/VIsion/FinancalGoal");
const FamilyGoal=() => import("@/forms/VIsion/FamilyGoal");
const SocalGoal=() => import("@/forms/VIsion/SocalGoal");
const PysicalGoal=() => import("@/forms/VIsion/PysicalGoal");
const SpritualGoal=() => import("@/forms/VIsion/SpritualGoal");
const VisionGoal=() => import("@/forms/VIsion/VisionGoal");
const MentalGoal=() => import("@/forms/VIsion/MentalGoal");
const EnsureGoal=() => import("@/forms/VIsion/EnsureGoal");
const MyNewMental =() => import("@/forms/VIsion/MyNewMental");
const MentalBank =() => import("@/forms/VIsion/Mentalbank");
const ActionPlan =() => import("@/forms/VIsion/ActionPlan");




const home = () => import("@/forms/question");
const HowToBuild = () => import("@/forms/HowToBuild");
const SignIn = () => import("@/containers/Login");
const SignUp = () => import("@/containers/SignUp");
const Main = () => import("@/forms/Selector");
const ProcessOfChange = () => import("@/forms/ProcessOfChange");
const AlphaResponsibility = () => import("@/forms/AlphaResponsibility");
const FourAttributes = () => import("@/forms/FourAttributes");
const AlphaBelief = () => import("@/forms/AlphaBelief");
const MentalTransformation = () => import("@/forms/MentalTransformation");
const SixSteps = () => import("@/forms/SixSteps");
const PositiveAffirmation = () => import("@/forms/PositiveAffirmation");
const TheFive = () => import("@/forms/TheFive");
const LevelsOfLeadership = () => import("@/forms/LevelsOfLeadership");
const DreamBoard = () => import("@/forms/DreamBoard");
const TeamMeeting = () => import("@/forms/TeamMeeting");
const TeamTask = () => import("@/forms/TeamTask");
const Qualities = () => import("@/forms/Qualities");
const AlphaTeam = () => import("@/forms/AlphaTeam");
const AlphaDream = () => import("@/forms/AlphaDream");
const GsystemBelief = () => import("@/forms/GsystemBelief");
const SilenceTime = () => import("@/forms/SilenceTime");
const AlphaDiscipline = () => import("@/forms/AlphaDiscipline");
const GsystemAttitude = () => import("@/forms/GsystemAttitude");
const HabitSelfImage = () => import("@/forms/HabitSelfImage");
const GratitudeJournal = () => import("@/forms/GratitudeJournal");
const Alpha = () => import("@/forms/Alpha");

//prgress
const Progress=() => import("@/forms/Progress");

// mentor 
const Mentors = () => import("@/mentor/container/TheContainer");
const ViewMentors= () => import("@/mentor/View");
const MainViewMentor= () => import("@/mentor/mainView");


// admin
const Admin = () => import("@/admin/container/TheContainer");
const Profile = () => import("@/admin/container/profile");
const View = () => import("@/admin/View");
const MainView = () => import("@/admin/mainView");
const HabitView = () => import("@/admin/HabitView");
const ViewUnApproved = () => import("@/admin/ViewUnApproved");
const VerificationKey = () => import("@/admin/VerificationKey");
const ViewVerification = () => import("@/admin/ViewVer");
// const MentorProfile = () => import("@/admin/container/MentorProfile");



// vision 
const VissionView=() => import("@/admin/VissionView");
const HowToSearchView=() => import("@/admin/Vission/HowToSearch");
const PersonalInformationView=() => import("@/admin/Vission/PersonalInformation");
const MyLifeView = () => import("@/admin/Vission/MyLife");
const MyHouseView =()=> import("@/admin/Vission/MyHouse");
const SocalDreamView =()=> import("@/admin/Vission/SocalDream");
const MyMentalView =()=> import("@/admin/Vission/MyMental");
const SpirtualView =()=> import("@/admin/Vission/Spirtual");
const ServiceView =()=> import("@/admin/Vission/Service");
const PhysicalView =()=> import("@/admin/Vission/Physical");
const FamilyView =()=> import("@/admin/Vission/Family");
const FinancialView =()=> import("@/admin/Vission/Financial");
const MyCarView =()=> import("@/admin/Vission/MyCar");
const UsePosetiveView =()=> import("@/admin/Vission/UsePosetive");
const FinancialGoalView =()=> import("@/admin/Vission/FinancalGoal");
const FamilyGoalView =()=> import("@/admin/Vission/FamilyGoal");
const SocalGoalView =()=> import("@/admin/Vission/SocalGoal");
const PhysicalGoalView =()=> import("@/admin/Vission/PhysicalGoal");
const SpiritualGoalView =()=> import("@/admin/Vission/SpiritualGoal");
const VisionGoalView =()=> import("@/admin/Vission/VisionGoal");
const MentalGoalView =()=> import("@/admin/Vission/MentalGoal");
const EnsureGoalView=()=> import("@/admin/Vission/EnsureGoal");
const ActionPlanView=()=> import("@/admin/Vission/ActionPlan");
const MyNewMentalView=()=> import("@/admin/Vission/MyNewMental");
const MentalBankView=()=> import("@/admin/Vission/Mentalbank");

// Habit
const HabitViewPage =() => import("@/admin/Habit/habit");
const HowToBuildViewPage=() => import("@/admin/Habit/HowToBuild");
const ProcessOfChangeViewPage=() => import("@/admin/Habit/ProcessOfChange");
const SilenceTimeViewPage=() => import("@/admin/Habit/SilenceTime");
const AlphaDisciplineViewPage=() => import("@/admin/Habit/AlphaDiscipline");
const AlphaResponsibilityViewPage=() => import("@/admin/Habit/AlphaResponsibility");
const GratitudeJournalViewPage=() => import("@/admin/Habit/GratitudeJournal");
const DreamBoardViewPage=() => import("@/admin/Habit/DreamBoard");
const GsystemBeliefViewPage=() => import("@/admin/Habit/GsystemBelief");
const AlphaDreamViewPage=() => import("@/admin/Habit/AlphaDream");
const GsystemAttitudeViewPage=() => import("@/admin/Habit/GsystemAttitude");




// TeamBuildingView
const TeamBuildingView=() => import("@/admin/TeamBuildingView");
const TeamMeetingViewPage=() => import("@/admin/TeamBuilding/TeamMeeting");
const TeamTaskViewPage=() => import("@/admin/TeamBuilding/TeamTask");
const AlphaViewPage=() => import("@/admin/TeamBuilding/Alpha");
const QualitiesViewPage=() => import("@/admin/TeamBuilding/Qualities");
const LevelsOfLeadershipViewPage=() => import("@/admin/TeamBuilding/LevelsOfLeadership");
const FourAttributesViewPage=() => import("@/admin/TeamBuilding/FourAttributes");
const TheFiveViewPage=() => import("@/admin/TeamBuilding/TheFive");
const AlphaTeamPageView =() =>import("@/admin/TeamBuilding/AlphaTeam");

// MindProgramming
const AlphaBeliefViewPage=() => import("@/admin/MindProgramming/AlphaBelief");
const MindProgramming = () => import("@/admin/MindProgramming");
const MentaTransformationPageView =() =>import("@/admin/MindProgramming/MentalTransformation");
const PositiveAffirmationPageView =() =>import("@/admin/MindProgramming/PositiveAffirmation");
const SixStepsPageView =() =>import("@/admin/MindProgramming/SixSteps");


//Mentor
const Mentor  = () => import("@/admin/Mentor");
const MentorsUsers = () => import("@/admin/MentorsUsers");
const AddMentor = () => import("@/admin/AddMentor");

Vue.use(Router);

export default new Router({
  mode: "history", // https://router.vuejs.org/api/#mode
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});
history.pushState(null, null, location.href);
window.onpopstate = function() {
  history.go(1);
};

function configRoutes() {
  return [
  
    {
      path: "*",
      component: SignIn, 
    },
    {
      path:'/test',
      component:() => import("@/forms/test")
    },
    {
      path: "/login",
      component: SignIn,
      name: 'login'
    },
    {
      path: "/signup",
      component: SignUp,
      name: 'signup' 
    },

    

    {
      path: "/admin",
      component: Admin,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem("token")) {
          next("/login");
        }
        if(localStorage.getItem("userType") == 'user'){
          next("/login");
        }

         else {
          next();
        }
      },
      children: [

        {
          path: "view",
          component: View,
        },
        {
          path: "profile",
          component: Profile, 
        },
        {
          path:"mentor",
          component:Mentor
        },
        {
          path: "mentor_user/:id",
          component: MentorsUsers
        },
        {
          path: "add_mentor",
          component: AddMentor
        },
        {
          path: "view_un_approved",
          component: ViewUnApproved,
        },
        {
          path:'vision',
          component:VissionView,
          children:[
            {
              path:"team_meeting",
              component:TeamMeetingViewPage
            },
          ]
        },
        {
          path:'verification',
          component: VerificationKey,
        },
        {
          path:'view_verification',
          component: ViewVerification,
        },
        {
          path: "main_view",
          component: MainView,
          redirect: 'main_view/vision',
          
          children: [
            {
              path:'vision',
              component:VissionView,
              redirect : 'vision/how_to_search',
              children:[
                {
                  path:'how_to_search',
                  component:HowToSearchView
                },
                {
                  path:'personal_information',
                  component:PersonalInformationView
                },
                {
                  path:'my_life_purpose',
                  component:MyLifeView
                },
                {
                  path:'my_house',
                  component:MyHouseView
                },
                {
                  path:'socal_dream',
                  component:SocalDreamView
                },
                {
                  path:'my_mental',
                  component:MyMentalView
                },
                {
                  path:'spirtual',
                  component:SpirtualView
                },
                {
                  path:'service',
                  component:ServiceView
                },
                {
                  path:'physical',
                  component:PhysicalView
                },
                {
                  path:'family',
                  component:FamilyView
                },
                {
                  path:'financial',
                  component:FinancialView
                },
                {
                  path:'car',
                  component:MyCarView
                },
                {
                  path:"use_posetive",
                  component:UsePosetiveView
                },
                {
                  path:"financial_goal",
                  component:FinancialGoalView
                },
                {
                  path:"family_goal",
                  component:FamilyGoalView
                },
                {
                  path:"socal_goal",
                  component:SocalGoalView
                },
                {
                  path:"physical_goal",
                  component:PhysicalGoalView
                },
                {
                  path:"spritual_goal",
                  component:SpiritualGoalView
                },
                {
                  path:"vision_goal",
                  component:VisionGoalView
                },
                {
                  path:"mental_goal",
                  component:MentalGoalView
                },
                {
                  path:"ensure_goal",
                  component:EnsureGoalView
                },
                {
                  path:"action_plan",
                  component:ActionPlanView
                },
                {
                  path:"my_new_mental",
                  component:MyNewMentalView
                },
                {
                  path:"mental_bank",
                  component:MentalBankView
                }
              ]
            },
            {
              path:"teambuilding_view",
              component: TeamBuildingView,
              redirect : 'teambuilding_view/team_meeting',
              children:[
                {
                  path:"team_meeting",
                  component:TeamMeetingViewPage
                },
                
                {
                  path:"team_tasks",
                  component:TeamTaskViewPage
                },
                {
                  path:"alpha_team",
                  component: AlphaTeamPageView
                },
                {
                  path:"alpha",
                  component:AlphaViewPage
                },
                {
                  path:"qualities",
                  component:QualitiesViewPage
                },
                {
                  path:"levels_of_leadership",
                  component:LevelsOfLeadershipViewPage
                },
                {
                  path:"four_attributes",
                  component:FourAttributesViewPage
                },
                {
                  path:"the_five",
                  component:TheFiveViewPage
                }
                ,
                
              ]
            },
           
            {
              path: "habit_view",
              component: HabitView,
              
              redirect:'habit_view/habit',
              children:[

             {
                  path: "habit",
                  component: HabitViewPage
                },{
                  path: "how_to_build",
                  component: HowToBuildViewPage
                },{
                   path:"process_of_change",
                   component :ProcessOfChangeViewPage
                  },
                  {
                    path:'silence_time',
                    component:SilenceTimeViewPage
                  },
                  {
                    path: 'alpha_displine',
                    component:AlphaDisciplineViewPage
                  },
                  {
                    path: 'alpha_responsibility',
                    component:AlphaResponsibilityViewPage
                  },
                  {
                    path: 'gratitude_journal',
                    component:GratitudeJournalViewPage
                  },
                  {
                    path: 'dream_board',
                    component:DreamBoardViewPage
                  },
                  {
                    path: 'gsystem_belief',
                    component:GsystemBeliefViewPage
                  },
                  {
                    path: 'alpha_dream',
                    component:AlphaDreamViewPage
                  },
                  {
                    path: 'gsystem_attitude',
                    component:GsystemAttitudeViewPage
                  }
                  
              ]
                
              
            },   
            {
              path:'mind_programming',
              component:MindProgramming,
              redirect: "mind_programming/alpha_belief",
              children:[{
                    path:"alpha_belief",
                    component : AlphaBeliefViewPage
                  },
                  {
                    path:"mental_transformation",
                    component : MentaTransformationPageView
                  },
                  {
                    path:"positive_affirmation",
                    component: PositiveAffirmationPageView
                  },

                  {
                    path:"six_steps",
                    component: SixStepsPageView
                  }
                ]
            }
                  
               
          ],
        },

      ],
    },
    {
      path: "/question",
      component: home,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem("token")) {
          next("/login");
        }
        if(localStorage.getItem("userType") == 'mentor'){
          next("/login");
        }
        if(localStorage.getItem("userType") == 'admin'){
          next("/login");
        }
         else {
          next();
        }
      },
      children: [
        {
          path:'how_to_search',
          component: HowToSearch
        },
        {
          path:'personal_information',
          component:PersonalInformation
        },
        {
          path:'my_life',
          component:MyLife
        },
        {
          path:'my_dream',
          component:MyDreamBoard
        },
        {
          path:'my_house',
          component:MyHouse
        },
        {
          path:'socal_dream',
          component:SocalDream
        },
        {
          path:'my_mental',
          component:Mymental
        },
        {
          path:"spirtual",
          component:Spirtual
        },
        {
          path:'service',
          component:Service
        },
        {
          path:'physical',
          component: Physical
        },
        {
          path:'family',
          component:Family
        },
        {
          path: 'financial',
          component:Financial
        },
        {
          path: 'car',
          component: Car
        },
        {
          path:'use_posetive',
          component:UsePosetive
        },

        {
          path:"financial_goal",
          component:FinancialGoal
        },
        {
          path:"family_goal",
          component:FamilyGoal
        },
        {
          path:"socal_goal",
          component:SocalGoal
        },
        {
          path:"physical_goal",
          component:PysicalGoal
        },
        {
          path:"spritual_goal",
          component:SpritualGoal
        },
        {
          path:"vision_goal",
          component:VisionGoal
        },
        {
          path:"mental_goal",
          component:MentalGoal
        },
        {
          path:"ensure_goal",
          component:EnsureGoal
        },
        {
          path:"my_new_mental",
          component:MyNewMental
        }, 
        {
          path:"mental_bank",
          component:MentalBank
        }, 
        {
          path:'action_plan',
          component:ActionPlan
        },        
        {
          path: "profile",
          component: Profile, 
        },
        {
          path: "how_to_build",
          component: HowToBuild,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "main",
          component: Main,
        },
        {
          path:'progress',
          component: Progress
        },
        {
          path: "process_of_change",
          component: ProcessOfChange,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "alpha_responsibility",
          component: AlphaResponsibility,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "four_attributes",
          component: FourAttributes,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<4) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "alpha_belief",
          component: AlphaBelief,
          beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<3) {
              next("question/main");
            } else {
              
              next();
            }
          },
         
        },
        {
          path: "mental_transformation",
          component: MentalTransformation,
          beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<3) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "six_steps",
          component: SixSteps,
          beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<3) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "positive_affirmation",
          component: PositiveAffirmation,
          beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<3) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "the_five",
          component: TheFive,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<4) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "gratitude_journal",
          component: GratitudeJournal,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "levels_of_leadership",
          component: LevelsOfLeadership,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<4) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },

        {
          path: "dream_board",
          component: DreamBoard,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "team_meeting",
          component: TeamMeeting,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<4) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "team_task",
          component: TeamTask,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<4) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "qualities",
          component: Qualities,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<4) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "alpha_team",
          component: AlphaTeam,
        },
        {
          path: "alpha",
          component: Alpha,
          beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<4) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "alpha_dream",
          component: AlphaDream,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "gsystem_belief",
          component: GsystemBelief,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "silence_time",
          component: SilenceTime,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "alpha_displine",
          component: AlphaDiscipline,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "gsystem_attitude",
          component: GsystemAttitude,
                    beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
        },
        {
          path: "habit",
          name: "habit",
          component: HabitSelfImage,
          beforeEnter: (to, from, next) => {
            console.log(localStorage.getItem("workBook"))
            if (localStorage.getItem("workBook")<2) {
              next("question/main");
            } else {
              
              next();
            }
          },
          meta: {},
        },
      ],

    }
  ];
}
