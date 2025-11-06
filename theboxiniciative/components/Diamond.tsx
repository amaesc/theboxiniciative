import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Diamond = ({ color }: { color: string }) => (
  <View style={[styles.diamond, { backgroundColor: color }]} />
);

const styles = StyleSheet.create({
  diamond: { width: 40, height: 40, transform: [{ rotate: '45deg' }] },
});