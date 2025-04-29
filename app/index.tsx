import { Text, View, StyleSheet } from "react-native";

const dados = [
  {
    id: 1,
    nome: "Gaby",
    cargo: "estudante"
  },
  {
    id: 2,
    nome: "Gabi de novo sim",
    cargo: "teacher's best"
  }
];

export default function Index() {
  return (
    <View
      style={style.container}
    >
      {
      dados.map( item => (
        <View style={style.itemLista}> 
          <Text style={style.textoLista}>{item.nome}</Text>
        </View>
      ))
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  itemLista: {
    width: '100%',
    padding: 10,
    marginBottom: 2,
    backgroundColor: "blue"
  },

  textoLista: {
    fontSize: 20
  }
})