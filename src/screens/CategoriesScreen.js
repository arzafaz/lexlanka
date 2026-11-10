import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import laws from '../data/laws.json';
import { colors } from '../theme';

const categories = [...new Set(laws.map((l) => l.category))];

export default function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      style={{ backgroundColor: colors.bg }}
      contentContainerStyle={{ padding: 16 }}
      data={categories}
      keyExtractor={(c) => c}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('LawList', { category: item })}>
          <Text style={styles.name}>{item}</Text>
          <Text style={styles.count}>{laws.filter((l) => l.category === item).length} entries</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.card, padding: 18, borderRadius: 10, marginBottom: 10,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 2,
  },
  name: { fontSize: 17, fontWeight: '700', color: colors.primary },
  count: { color: colors.muted },
});
