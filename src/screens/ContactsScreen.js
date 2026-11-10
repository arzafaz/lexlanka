import React from 'react';
import { FlatList, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import contacts from '../data/contacts.json';
import { colors } from '../theme';

export default function ContactsScreen() {
  return (
    <FlatList
      style={{ backgroundColor: colors.bg }}
      contentContainerStyle={{ padding: 16 }}
      data={contacts}
      keyExtractor={(c) => String(c.id)}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.row} onPress={() => Linking.openURL(`tel:${item.number}`)}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.num}>📞 {item.number}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: { backgroundColor: colors.card, padding: 14, borderRadius: 10, marginBottom: 10, elevation: 2 },
  name: { fontSize: 16, fontWeight: '700', color: colors.text },
  desc: { color: colors.muted, marginVertical: 3 },
  num: { color: colors.primary, fontWeight: '800', fontSize: 18 },
});
