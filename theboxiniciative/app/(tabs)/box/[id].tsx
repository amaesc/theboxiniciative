import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';

// Import all the separated parts
import { styles } from './[id].styles';
import { Diamond } from '@/components/Diamond';
import { StatusBox } from '@/components/StatusBox';
import { useBoxMonitor } from '@/hooks/useBoxMonitor';

import { FontAwesome6 } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function BoxMonitorScreen() {
  const router = useRouter();
  
  // All logic, data, and state are handled by the hook
  const { boxData, sensorData } = useBoxMonitor();

  const iconColor = useThemeColor({}, 'text');

  // The rest of your component is pure skeleton (JSX)
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* --- TOP NAVIGATION BAR --- */}
        <ThemedView style={styles.topNav}>
          <TouchableOpacity onPress={() => router.back()}>
            <ThemedText style={styles.navText}>Configuration</ThemedText>
          </TouchableOpacity>
          <ThemedText style={styles.navText}>Tutorial</ThemedText>
        </ThemedView>

        <ScrollView>
          {/* --- BOX HEADER --- */}
          <ThemedView style={styles.boxHeader}>
            <Diamond color={boxData.color} />
            <View>
              <ThemedText style={styles.boxName}>{boxData.name}</ThemedText>
              <ThemedText style={styles.boxAddress}>{boxData.address}</ThemedText>
            </View>
            <TouchableOpacity>
              <FontAwesome6 
                name="pen-to-square" 
                size={20} 
                color={iconColor} 
                style={styles.refreshIcon} // You can still use this for margins, etc.
              />
            </TouchableOpacity>
          </ThemedView>

          {/* --- ONLINE STATUS & CAMERA --- */}
          <ThemedView style={styles.statusRow}>
            <TouchableOpacity style={styles.cameraButton}>
              <ThemedText style={styles.cameraButtonText}>Camera</ThemedText>
            </TouchableOpacity>
            <ThemedView style={styles.onlineStatus}>
                <ThemedText style={styles.onlineText}>ONLINE</ThemedText>
            </ThemedView>
            <ThemedView style={styles.onlineStatus}>
              <View style={[styles.ownerCircle, {backgroundColor: 'red'}]} />
              <View style={[styles.ownerCircle, {backgroundColor: 'green'}]} />
              <View style={[styles.ownerCircle, {backgroundColor: 'blue'}]} />
            </ThemedView>
          </ThemedView>

          {/* --- SENSOR DATA --- */}
          <ThemedView style={styles.statusGrid}>
            <StatusBox value={sensorData.temperature} label="Temperature" />
            <StatusBox value={sensorData.humidity} label="Humidity (%)" />
            <StatusBox value={sensorData.weight} label="Weight" />
          </ThemedView>
          
          {/* --- PASSKEYS & LOGS --- */}
          <ThemedView style={styles.infoGrid}>
            <TouchableOpacity style={styles.infoBox}>
                <ThemedText style={styles.infoBoxValue}>0043234</ThemedText>
                <ThemedText style={styles.infoBoxLabel}>One time passkey</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoBox}>
                <ThemedText style={styles.infoBoxValue}>See</ThemedText>
                <ThemedText style={styles.infoBoxLabel}>Offline Passkeys</ThemedText>
            </TouchableOpacity>
          </ThemedView>
           <ThemedView style={styles.infoGrid}>
            <TouchableOpacity style={styles.infoBox}>
                <ThemedText style={styles.infoBoxValue}>See Box Logs</ThemedText>
                <ThemedText style={styles.infoBoxLabel}>Logs</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoBox}>
                <ThemedText style={styles.infoBoxValue}>********</ThemedText>
                <ThemedText style={styles.infoBoxLabel}>Password</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          {/* --- UNLOCK BUTTON --- */}
          <ThemedView style={styles.unlockContainer}>
              <TouchableOpacity style={styles.unlockButton}>
                  <ThemedText style={styles.unlockText}>Press to</ThemedText>
                  <ThemedText style={styles.unlockText}>unlock</ThemedText>
              </TouchableOpacity>
          </ThemedView>

          {/* --- BOTTOM SECTION (FIXED) --- */}
          <ThemedView style={styles.bottomContent}>
            <ThemedText style={styles.bottomText}>Press to unlock / lock</ThemedText>
          </ThemedView>

        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}