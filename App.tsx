import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import GoalInput from './components/GoalInput'

import GoalItem from './components/GoalItem'

export default function App() {
  const [courseGoals, setCourseGoals] = useState<
    { goal: string; key: string }[]
  >([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onAddGoal = (goalInputText: string) => {
    setIsModalVisible(false)
    setCourseGoals(prev => [
      ...prev,
      {
        goal: goalInputText,
        key: Math.random().toString(),
      },
    ])
  }

  const deleteGoalHandler = (id: string) => {
    setCourseGoals(prev => prev.filter(goal => goal.key !== id))
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContianer}>
        <Text style={styles.heading}>Goals Tracking</Text>
        <Button
          title="Add New Goal"
          color="#a0658c"
          onPress={() => setIsModalVisible(true)}
        />
        {isModalVisible && (
          <GoalInput
            onAddGoal={onAddGoal}
            visible={isModalVisible}
            cancelModal={() => setIsModalVisible(false)}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            style={styles.goalsList}
            data={courseGoals}
            renderItem={({ item }) => (
              <GoalItem goalItem={item} onDeleteItem={deleteGoalHandler} />
            )}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContianer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 64,
  },
  goalsContainer: {
    flex: 4,
  },
  goalsList: {
    marginTop: 32,
  },
})
