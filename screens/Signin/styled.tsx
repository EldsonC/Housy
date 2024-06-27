import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F8F7FD"
  },

  wave: {
    marginTop: 95,
    width: "100%",
    height: 150
  },

  Form: {
    marginTop: 23,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  textGradient: {

  },
  h1Title: {
    marginTop:  23,
    maxWidth: 250,
    fontFamily: "Inter-SemiBold",  
    fontSize: 32,
    textAlign: "center"
  },

  paragraph: {
    marginTop: 17,
    maxWidth: 243,
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#98989A",
    textAlign: "center",
    lineHeight: 20
  },

  buttonGrad: {
    marginTop: 97,
    width: 351,
    height: 67,
    borderRadius: 20,
  },
  button: {
    paddingLeft: 19,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 58,
    alignItems: "center",
    borderRadius: 20,

    width: 351,
    height: 67,
  },
  textButton: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#fff"
  }
})