import { FC } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface Props {
  goalItem: {
    goal: string
    key: string
  }
  onDeleteItem: (id: string) => void
}

const GoalItem: FC<Props> = ({ goalItem, onDeleteItem }) => {
  return (
    <Pressable
      android_ripple={{ color: '#5e0a9c' }}
      onLongPress={() => onDeleteItem(goalItem.key)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{goalItem.goal}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {},
  goalItemText: { color: '#fff', textAlign: 'center' },
})

export default GoalItem
