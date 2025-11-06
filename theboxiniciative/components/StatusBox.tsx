import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';

export const StatusBox = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <View style={styles.statusBox}>
    <ThemedText style={styles.statusBoxValue}>{value}</ThemedText>
    <ThemedText style={styles.statusBoxLabel}>{label}</ThemedText>
  </View>
);

const styles = StyleSheet.create({
  statusBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    width: '30%',
  },
  statusBoxValue: { fontSize: 20, fontWeight: 'bold' },
  statusBoxLabel: { fontSize: 12, color: '#666', marginTop: 5 },
});