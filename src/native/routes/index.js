import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RecipesContainer from '../../containers/Recipes';
import RecipeListingComponent from '../components/Recipe/Listing';
import RecipeSingleComponent from '../components/Recipe/Single';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/User/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/User/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/User/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/User/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/User/Profile';

import AboutComponent from '../components/About';
import MainComponent from '../components/User/Main';

import ExploreComponent from '../components/User/Explore';
import ScheduleComponent from '../components/User/Schedule';
import FavouriteComponent from '../components/User/Favourite';
import Mycard from '../components/User/MyCard';
import CreditcardComponent from '../components/User/CreditCard';


import UpdateCreditCardComponent from '../components/User/UpdateCreditCard';
import NewCreditCardAddComponent from '../components/User/NewCreditCardAdd';
import MyPoints from '../components/User/MyPoints';


import SettingComponent from '../components/User/Setting';

import AccountComponent from '../components/User/Accounts';


const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
   <Scene key="home" component={AboutComponent} />
          <Scene
            back
            key="forgotPassword"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />

        <Stack
          key="login"
          title="Welcome to Login"
        >
        <Scene
            back
            key="login"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          /> 
          </Stack>
          <Stack
            key="signUp"
            title="Sign Up"
          >
          <Scene
              back
              key="signUp"
              {...DefaultProps.navbarProps}
              component={SignUpContainer}
              Layout={SignUpComponent}
            />
          </Stack>
          <Stack
            key="profile"
            title="Profile"
          >
          <Scene
              back
              key="profile"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={ProfileComponent}
            />
            
          </Stack>
          <Stack
            key="mycard"
            title="My Card"
          >
          <Scene
              back
              key="mycard"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={Mycard}
            />
            
          </Stack>
          <Stack
            key="creditcard"
            title="Credit Card"
          >
          <Scene
              back
              key="creditCard"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={CreditcardComponent}
            />
            </Stack>
             <Stack
            key="updatecreditcard"
            title="Credit Card"
          >
             <Scene
              back
              key="updatecreditcard"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={UpdateCreditCardComponent}
            />
            
          </Stack>

          <Stack
            key="newcreditcardadd"
            title="Credit Card"
          >
             <Scene
              back
              key="newcreditcardadd"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={NewCreditCardAddComponent}
            />
            
          </Stack>
          <Stack
            key="mypoints"
            title="My Points"
          >
             <Scene
              back
              key="mypoints"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={MyPoints}
            />
            
          </Stack>
          <Stack
            key="setting"
            title="My Setting"
          >
             <Scene
              back
              key="setting"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={SettingComponent}
            />
            
          </Stack>
          <Stack
            key="account"
            title="My Account"
          >
             <Scene
              back
              key="account"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={AccountComponent}
            />
            
          </Stack>

          <Stack
            key="main"
            title="Home"
            style = {{textAlign:'center',borderBottomLeftRadius:4,borderBottomRightRadius:4}}
            icon={() => <Icon name="book" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
            <Scene
                key="main"
                style = {{textAlign:'center',borderBottomLeftRadius:4,borderBottomRightRadius:4}}
                {...DefaultProps.navbarProps}
                component={MemberContainer}
                Layout={MainComponent}
              
              />
              <Scene
                key="explore"
                title="Explore"
                component={MemberContainer}
                Layout={ExploreComponent}
            />
            <Scene
              key="schedule"
              title="Schedule"
              component={MemberContainer}
              Layout={ScheduleComponent}
            />
            <Scene
              key="favourite"
              title="Favourites"
              component={MemberContainer}
              Layout={FavouriteComponent}
            />
          </Stack>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        style = {{textAlign:'center',borderBottomLeftRadius:4,borderBottomRightRadius:4}}
        showLabel={false}
        {...DefaultProps.tabProps}

      >
        <Stack
            key="main"
            title="Home"
            style = {{textAlign:'center',borderBottomLeftRadius:4,borderBottomRightRadius:4}}
            icon={() => <Icon name="book" {...DefaultProps.icons} />}
            {...DefaultProps.navbarProps}
          >
          <Scene
              key="main"
              style = {{textAlign:'center',borderBottomLeftRadius:4,borderBottomRightRadius:4}}
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={MainComponent}
             
            />
            <Scene
              key="explore"
              title="Explore"
              component={MemberContainer}
              Layout={ExploreComponent}
            />
            <Scene
              key="schedule"
              title="Schedule"
              component={MemberContainer}
              Layout={ScheduleComponent}
            />
            </Stack>
        <Stack
          key="recipes"
          title="RECIPES"
          icon={() => <Icon name="book" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="recipes" component={RecipesContainer} Layout={RecipeListingComponent} />
        </Stack>
        <Stack
          key="profile"
          title="PROFILE"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="FORGOT PASSWORD"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="updateProfile"
            title="UPDATE PROFILE"
            {...DefaultProps.navbarProps}
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
          <Scene
              back
              key="mycard"
              title="My Card"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={Mycard}
            />
            <Scene
              back
              key="creditcard"
              title="Credit Card"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={Mycard}
            />
             <Scene
              back
              key="updatecreditcard"
              {...DefaultProps.navbarProps}
              component={UpdateProfileContainer}
              Layout={UpdateCreditCardComponent}
            />
             <Scene
              back
              key="newcreditcardadd"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={NewCreditCardAddComponent}
            />
            <Scene
              back
              key="mypoints"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={MyPoints}
            />
             <Scene
              back
              key="setting"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={SettingComponent}
            />
            <Scene
              back
              key="account"
              {...DefaultProps.navbarProps}
              component={MemberContainer}
              Layout={AccountComponent}
            />
        </Stack>
      </Tabs>
    </Scene>

    <Scene
      back
      clone
      key="recipe"
      title="RECIPE"
      {...DefaultProps.navbarProps}
      component={RecipesContainer}
      Layout={RecipeSingleComponent}
    />
  </Stack>
);

export default Index;
