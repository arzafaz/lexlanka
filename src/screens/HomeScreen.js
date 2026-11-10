import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import laws from '../data/laws.json';
import { colors } from '../theme';

export default function HomeScreen({ navigation }) {
  const law = laws[new Date().getDate() % laws.length];
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.heading}>Know your rights.</Text>
      <Text style={styles.sub}>A pocket guide to Sri Lankan law, fully offline.</Text>

      <Text style={styles.section}>Law of the Day</Text>
      <TouchableOpacity style={styles.hero} onPress={() => navigation.navigate('LawDetail', { id: law.id })}>
        <Text style={styles.heroCat}>{law.category.toUpperCase()}</Text>
        <Text style={styles.heroTitle}>{law.title}</Text>
        <Text style={styles.heroAct}>{law.act}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Categories')}>
        <Text style={styles.btnText}>Browse by Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.btnAlt]} onPress={() => navigation.navigate('LawList', {})}>
        <Text style={[styles.btnText, { color: colors.primary }]}>Search All Laws</Text>
      </TouchableOpacity>
      <Text style={styles.note}>For general information only. Not a substitute for legal advice.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  heading: { fontSize: 26, fontWeight: '800', color: colors.primary },
  sub: { color: colors.muted, marginBottom: 20 },
  section: { fontSize: 14, fontWeight: '700', color: colors.muted, marginBottom: 8 },
  hero: { backgroundColor: colors.primary, padding: 18, borderRadius: 14, marginBottom: 20 },
  heroCat: { color: colors.accent, fontSize: 11, fontWeight: '700' },
  heroTitle: { color: '#fff', fontSize: 20, fontWeight: '700', marginVertical: 6 },
  heroAct: { color: '#E8D9DD', fontSize: 12 },
  btn: { backgroundColor: colors.primary, padding: 14, borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  btnAlt: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: colors.primary },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  note: { textAlign: 'center', color: colors.muted, fontSize: 12, marginTop: 16 },
});
