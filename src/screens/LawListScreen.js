import React, { useState, useMemo } from 'react';
import { View, FlatList, TextInput, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import laws from '../data/laws.json';
import LawCard from '../components/LawCard';
import { colors } from '../theme';

const categories = ['All', ...new Set(laws.map((l) => l.category))];

export default function LawListScreen({ route, navigation }) {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState(route.params?.category || 'All');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return laws.filter(
      (l) =>
        (cat === 'All' || l.category === cat) &&
        (!q || `${l.title} ${l.act} ${l.summary}`.toLowerCase().includes(q))
    );
  }, [query, cat]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search laws, acts, keywords..."
        value={query}
        onChangeText={setQuery}
      />
      <View style={{ height: 44 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((c) => (
            <TouchableOpacity key={c} style={[styles.chip, cat === c && styles.chipOn]} onPress={() => setCat(c)}>
              <Text style={[styles.chipText, cat === c && { color: '#fff' }]}>{c}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={results}
        keyExtractor={(l) => String(l.id)}
        contentContainerStyle={{ paddingTop: 8 }}
        ListEmptyComponent={<Text style={styles.empty}>No matching laws found.</Text>}
        renderItem={({ item }) => (
          <LawCard law={item} onPress={() => navigation.navigate('LawDetail', { id: item.id })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  search: { backgroundColor: '#fff', borderRadius: 10, padding: 12, borderWidth: 1, borderColor: colors.border, marginBottom: 10 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, marginRight: 8, height: 36 },
  chipOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.primary, fontWeight: '600' },
  empty: { textAlign: 'center', color: colors.muted, marginTop: 30 },
});
