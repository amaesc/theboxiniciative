import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router'; // Import the router

// A simple component for the logo placeholder
const Logo = () => (
  <ThemedView style={styles.logoContainer}>
    <ThemedView style={styles.logo} />
  </ThemedView>
);

// TypeScript props for the Login form
type LoginScreenProps = {
  onSwitchToSignUp: () => void;
};

// The Login Screen Component
const LoginScreen = ({ onSwitchToSignUp }: LoginScreenProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Get the router instance

  const handleLogin = () => {
    // TODO: Add your actual login logic here
    console.log('Logging in with:', username, password);
    // On successful login, navigate to the home screen
    router.replace('/home');
  };

  return (
    <ThemedView style={styles.formContainer}>
      <ThemedText type="subtitle" style={styles.title}>
        Login
      </ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Username / Email"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#888"
      />

      <ThemedView style={styles.buttonRow}>
        <TouchableOpacity onPress={onSwitchToSignUp}>
          <ThemedText style={styles.linkText}>Create an account</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <ThemedText style={styles.buttonText}>Enter</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

// TypeScript props for the Sign Up form
type SignUpScreenProps = {
  onSwitchToLogin: () => void;
};

// The Sign Up Screen Component
const SignUpScreen = ({ onSwitchToLogin }: SignUpScreenProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSignUp = () => {
    // TODO: Add your actual sign-up logic here
    if (password !== repeatPassword) {
      console.warn("Passwords don't match!");
      return;
    }
    console.log('Signing up with:', username, email, password);
  };

  return (
    <ThemedView style={styles.formContainer}>
      <ThemedText type="subtitle" style={styles.title}>
        Sign Up
      </ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry
        placeholderTextColor="#888"
      />

      <ThemedView style={styles.buttonRow}>
        <TouchableOpacity onPress={onSwitchToLogin}>
          <ThemedText style={styles.linkText}>Already have an account?</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <ThemedText style={styles.buttonText}>Register</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

// Main component that decides which screen to show
export default function AuthScreen() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        
        {/* --- TOP SECTION (FIXED) --- */}
        <View>
          <ThemedView style={styles.languageBar}>
            <TouchableOpacity onPress={() => alert('Language switcher pressed!')}>
              <ThemedText style={styles.languageText}>English</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <ThemedView style={styles.header}>
            <ThemedText type="title" style={styles.headerText}>
              THE BOX INICIATIVE
            </ThemedText>
          </ThemedView>

          <Logo />
        </View>

        {/* --- MIDDLE SECTION (SCROLLABLE & CENTERED) --- */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.middleSection}>
          <ScrollView
            contentContainerStyle={styles.middleScrollViewContent}
            keyboardShouldPersistTaps="handled">
            {showLogin ? (
              <LoginScreen onSwitchToSignUp={() => setShowLogin(false)} />
            ) : (
              <SignUpScreen onSwitchToLogin={() => setShowLogin(true)} />
            )}
          </ScrollView>
        </KeyboardAvoidingView>
        
        {/* --- BOTTOM SECTION (FIXED) --- */}
        <ThemedView style={styles.bottomContent}>
          <ThemedText style={styles.bottomText}>Boxes List (Scroll)</ThemedText>
        </ThemedView>

      </ThemedView>
    </SafeAreaView>
  );
}

// All the styles for the components
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  middleSection: {
    flex: 1,
  },
  middleScrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  languageBar: {
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  languageText: {
    marginTop: 10,
    fontSize: 14,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  headerText: {
    marginTop: 10,
    letterSpacing: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 15, 
    backgroundColor: 'transparent',
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#333',
    borderRadius: 15,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  title: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  linkText: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  bottomContent: {
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: 'transparent',
  },
  bottomText: {
    fontSize: 16,
  },
});
