// 13. Vowel Count
// source : https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/cpp


#include <string>
#include <iostream>

using namespace std;

int getCount(const string& inputStr){
  int num_vowels = 0;
  int length = inputStr.length();
  
  char teks[length];
  
  for (int i = 0; i < length; i++) {
      teks[i] = inputStr[i];
  }
  
  for (int i = 0; i < length; i++) {
    if (teks[i] == 'a' || teks[i] == 'i' || teks[i] == 'u' || teks[i] == 'e' || teks[i] == 'o')
    num_vowels++;
  }
  
  return num_vowels;
}


int main () {
  cout << getCount("dipanegara");
  return 0;
}