import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '105%',
    height: '100%',
  },
  videoContainer: {
    position: 'absolute',
    top: 300,
    left: -20,
    bottom: 270,
    right: -20,
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: 'white',
    marginTop: 15,
    width: 480,
    height: 200,
  },
  video: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 265,
    fontWeight: 'bold',
  },
  text2Container: {
    marginTop: 210,
    paddingHorizontal: 20,
  },
  text2: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ff6500',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    margin: 5,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});
