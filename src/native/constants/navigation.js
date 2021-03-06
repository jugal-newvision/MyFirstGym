import Colors from '../../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { 
      backgroundColor: 'lightblue',
      borderBottomLeftRadius:28,

      borderBottomRightRadius:28

   },
    titleStyle: {
      color: Colors.textColor,
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
      borderBottomLeftRadius:8,

      borderBottomRightRadius:8
    },
    backButtonTintColor: Colors.textColor,
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: 'rgba(255,255,255,0.1)',
    inactiveBackgroundColor: Colors.brandPrimary,
    tabBarStyle: { backgroundColor: Colors.brandPrimary },
  },

  icons: {
    style: { color: 'blue', height: 30, width: 30 },
  },
};
