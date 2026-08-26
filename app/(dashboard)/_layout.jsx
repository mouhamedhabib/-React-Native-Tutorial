import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import Icon from "react-native-vector-icons/MaterialIcons"

export default function DashboardLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.navBackground, paddingTop: 10, height: 90 },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen 
        name="profile"
        options={{ title: "Profile" , tabBarIcon: ({ focused, color }) => <Icon name={focused ? "person" : "person-outline"} size={24} color={color} /> }}
      />
      <Tabs.Screen 
        name="books"
        options={{ title: "Books", tabBarIcon: ({ color }) => <Icon name="book" size={24} color={color} /> }} 
      />
      <Tabs.Screen 
        name="create"
        options={{ title: "Create", tabBarIcon: ({ color }) => <Icon name="add" size={24} color={color} /> }} 
      />
    </Tabs>
  )
}