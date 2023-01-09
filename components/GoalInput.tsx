import { useState, FC } from 'react'
import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native'

interface Props {
  visible: boolean
  onAddGoal: (goalInputText: string) => void
  cancelModal: () => void
}

const GoalInput: FC<Props> = ({ onAddGoal, visible, cancelModal }) => {
  const [goalInputText, setGoalInputText] = useState('')

  const goalInputHandler = (enteredText: string) => {
    setGoalInputText(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(goalInputText)
    setGoalInputText('')
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          onChangeText={goalInputHandler}
          value={goalInputText}
          style={styles.textInput}
          placeholder="Type your goal here!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button onPress={cancelModal} title="Cancel" color="#f3123e" />
          </View>
          <View style={styles.buttons}>
            <Button onPress={addGoalHandler} title="Add goal" color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 32,
  },
  buttons: {
    width: '40%',
    marginHorizontal: 8,
  },
})
