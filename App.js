import React, { useCallback, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [visibleFirst, setVisibleFirst] = useState(false);
  const [visibleSecond, setVisibleSecond] = useState(false);

  const renderModal = useCallback((visible, close, color, label) => {
    if (!visible) return null;

    return (
      // <Modal animationType="none" transparent visible={visible}> <-- correção é remover esse tipo de animação
        <Modal animationType="fade" transparent visible={visible}>
        <TouchableOpacity
          style={[styles.modalOverlay, { backgroundColor: "rgba(0,0,0,0.3)" }]}
          onPress={close}
        >
          <View style={[styles.modalContent, { backgroundColor: color }]}>
            <Text>{label}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }, []);

  return (
    <View style={styles.modalOverlay}>
      <TouchableOpacity
        style={[styles.button, { marginBottom: 20 }]}
        onPress={() => setVisibleFirst(true)}
      >
        <Text>Primeira Modal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setVisibleSecond(true)}
      >
        <Text>Segunda Modal</Text>
      </TouchableOpacity>

      {renderModal(visibleFirst, () => setVisibleFirst(false), "lightblue", "Modal 1")}
      {renderModal(visibleSecond, () => setVisibleSecond(false), "lightgreen", "Modal 2")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 200,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 15,
    backgroundColor: "lightpink",
  },
});
