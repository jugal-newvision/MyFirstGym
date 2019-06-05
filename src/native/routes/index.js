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

import ExploreComponent from '../components/User/explore';
import ScheduleComponent from '../components/User/Schedule';
import FavouriteComponent from '../components/User/favourite';

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
