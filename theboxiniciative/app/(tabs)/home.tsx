import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';

// This is a reusable component for the colored diamond shape
const Diamond = ({ color }: { color: string }) => (
  <View style={[styles.diamond, { backgroundColor: color }]} />
);

// This is a reusable component for each item in your boxes list
const BoxListItem = ({
  color,
  title,
  subtitle,
}: {
  color: string;
  title: string;
  subtitle: string;
}) => (
  <TouchableOpacity style={styles.boxItem}>
    <Diamond color={color} />
    <View style={styles.boxItemTextContainer}>
      <ThemedText style={styles.boxItemTitle}>{title}</ThemedText>
      <ThemedText style={styles.boxItemSubtitle}>{subtitle}</ThemedText>
    </View>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const router = useRouter();

  // Mock data for your list, just like in the mockup
  const boxes = [
    {
      color: '#f39c12', // Orange
      title: 'Trabajo',
      subtitle: 'Colonia centro #53',
    },
    {
      color: '#e74c3c', // Red
      title: 'Casa en las Lomas',
      subtitle: 'Francisco Villa #234',
    },
    {
      color: '#3498db', // Blue
      title: 'Casa del perro',
      subtitle: 'Col. Revolución #21 Apt 2.',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* --- TOP NAVIGATION BAR --- */}
        <ThemedView style={styles.topNav}>
          <TouchableOpacity onPress={() => alert('Configuration pressed!')}>
            <ThemedText style={styles.navText}>Configuration</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Tutorial pressed!')}>
            <ThemedText style={styles.navText}>Tutorial</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* --- WELCOME MESSAGE --- */}
        <ThemedView style={styles.welcomeContainer}>
          <ThemedText style={styles.welcomeText}>WELCOME</ThemedText>
          <ThemedText style={styles.welcomeTextName}>ALBERTO</ThemedText>
        </ThemedView>

        {/* --- MY BOXES BUTTON --- */}
        <TouchableOpacity style={styles.myBoxesButton}>
          <ThemedText style={styles.myBoxesButtonText}>My Boxes List</ThemedText>
        </TouchableOpacity>

        {/* --- SCROLLABLE LIST --- */}
        <ScrollView style={styles.listContainer}>
          {boxes.map((box, index) => (
            <BoxListItem
              key={index}
              color={box.color}
              title={box.title}
              subtitle={box.subtitle}
            />
          ))}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'transparent',
  },
  navText: {
    marginTop: 10,
    fontSize: 16,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: 'transparent',
  },
  welcomeText: {
    fontSize: 24,
    letterSpacing: 2,
  },
  welcomeTextName: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  myBoxesButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  myBoxesButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  listContainer: {
    flex: 1,
  },
  boxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  diamond: {
    width: 30,
    height: 30,
    transform: [{ rotate: '45deg' }],
    marginRight: 20,
    marginLeft: 10,
  },
  boxItemTextContainer: {
    flex: 1,
  },
  boxItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxItemSubtitle: {
    fontSize: 16,
    color: '#666',
  },
});
