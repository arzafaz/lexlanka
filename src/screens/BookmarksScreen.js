import React, { useCallback, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import laws from '../data/laws.json';
import LawCard from '../components/LawCard';
import { getBookmarks } from '../db/bookmarks';
import { colors } from '../theme';

export default function BookmarksScreen({ navigation }) {
  const [items, setItems] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getBookmarks().then((ids) => setItems(laws.filter((l) => ids.includes(l.id))));
    }, [])
  );

  return (
    <FlatList
      style={{ backgroundColor: colors.bg }}
      contentContainerStyle={{ padding: 16, flexGrow: 1 }}
      data={items}
      keyExtractor={(l) => String(l.id)}
      ListEmptyComponent={<Text style={styles.empty}>No bookmarks yet. Save laws from their detail page.</Text>}
      renderItem={({ item }) => (
        <LawCard law={item} onPress={() => navigation.navigate('LawDetail', { id: item.id })} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  empty: { textAlign: 'center', color: colors.muted, marginTop: 40 },
});
