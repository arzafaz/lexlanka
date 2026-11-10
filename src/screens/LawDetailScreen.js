import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import laws from '../data/laws.json';
import { getBookmarks, toggleBookmark } from '../db/bookmarks';
import { colors } from '../theme';

export default function LawDetailScreen({ route }) {
  const law = laws.find((l) => l.id === route.params.id);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    getBookmarks().then((b) => setSaved(b.includes(law.id)));
  }, []);

  const onToggle = async () => {
    const next = await toggleBookmark(law.id);
    setSaved(next.includes(law.id));
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.cat}>{law.category.toUpperCase()}</Text>
      <Text style={styles.title}>{law.title}</Text>
      <Text style={styles.act}>{law.act}</Text>

      <TouchableOpacity style={[styles.save, saved && styles.saved]} onPress={onToggle}>
        <Text style={[styles.saveText, saved && { color: '#fff' }]}>{saved ? 'Bookmarked ✓' : 'Bookmark this'}</Text>
      </TouchableOpacity>

      <Text style={styles.h}>Summary</Text>
      <Text style={styles.body}>{law.summary}</Text>

      <Text style={styles.h}>Key Points</Text>
      {law.keyPoints.map((p, i) => (
        <Text key={i} style={styles.body}>• {p}</Text>
      ))}

      <Text style={styles.h}>Penalty / Remedy</Text>
      <Text style={styles.body}>{law.penalty}</Text>

      <Text style={styles.h}>Example Scenario</Text>
      <View style={styles.example}>
        <Text style={styles.body}>{law.example}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cat: { color: colors.primary, fontWeight: '700', fontSize: 12 },
  title: { fontSize: 22, fontWeight: '800', color: colors.text, marginVertical: 6 },
  act: { color: colors.muted, marginBottom: 12 },
  save: { borderWidth: 1.5, borderColor: colors.primary, borderRadius: 8, padding: 10, alignItems: 'center', marginBottom: 8 },
  saved: { backgroundColor: colors.primary },
  saveText: { color: colors.primary, fontWeight: '700' },
  h: { fontSize: 15, fontWeight: '800', color: colors.primary, marginTop: 16, marginBottom: 4 },
  body: { fontSize: 15, color: colors.text, lineHeight: 22, marginBottom: 2 },
  example: { backgroundColor: '#FBF3D5', padding: 12, borderRadius: 8 },
});
