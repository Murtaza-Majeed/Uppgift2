import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Uppgift2 = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* counterviewer */}
      <Text style={styles.countText}>{count}</Text>

      {/* plusminusbutton */}
      <View style={styles.buttonContainer}>
        <Button
          title="MINUS"
          onPress={() => setCount(count > 0 ? count - 1 : 0)}
        />
        <Button
          title="PLUS"
          onPress={() => setCount(count + 1)}
        />
      </View>

      {/* "RESET" */}
      {count > 0 && (
        <View style={styles.resetButton}>
          <Button title="RESET" onPress={() => setCount(0)} />
        </View>
      )}
    </View>
  );
};

// styledefinition
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: 30,
  },
  resetButton: {
    marginTop: 20,
  },
});

export default Uppgift2;
