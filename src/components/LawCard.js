import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function LawCard({ law, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cat}>{law.category.toUpperCase()}</Text>
      <Text style={styles.title}>{law.title}</Text>
      <Text style={styles.act}>{law.act}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card, padding: 14, borderRadius: 10, marginBottom: 10,
    borderLeftWidth: 4, borderLeftColor: colors.accent, elevation: 2,
  },
  cat: { fontSize: 11, color: colors.primary, fontWeight: '700' },
  title: { fontSize: 16, fontWeight: '600', color: colors.text, marginVertical: 4 },
  act: { fontSize: 12, color: colors.muted },
});
