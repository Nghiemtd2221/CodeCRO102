import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, TouchableOpacity } from 'react-native';

const exercises = [
  { id: '1', text: 'Bài tập thở sâu', detail: 'Hít thở sâu và chậm, giữ hơi thở trong vài giây, rồi từ từ thở ra.' },
  { id: '2', text: 'Thiền định 10 phút', detail: 'Ngồi trong tư thế thoải mái, tập trung vào hơi thở của bạn trong 10 phút.' },
  { id: '3', text: 'Đi bộ 30 phút', detail: 'Đi bộ nhanh trong 30 phút để cải thiện sức khỏe tim mạch và tinh thần.' },
  // Thêm các bài tập mẫu khác ở đây
];

const BTSK = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handlePress = (exercise) => {
    setSelectedExercise(exercise);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài tập nâng cao tinh thần và sức khỏe</Text>
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.exerciseItem}>
              <Text style={styles.exerciseText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      {selectedExercise && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedExercise.text}</Text>
              <Text style={styles.modalDetail}>{selectedExercise.detail}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedExercise(null);
                }}
              >
                <Text style={styles.closeButtonText}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  exerciseItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  exerciseText: {
    fontSize: 18,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetail: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BTSK;
