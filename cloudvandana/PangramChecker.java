import java.util.HashSet;

public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; // Replace this with your input string

        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String str) {
        str = str.toLowerCase(); // Convert the input to lowercase for case insensitivity
        HashSet<Character> alphabetSet = new HashSet<>();

        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                alphabetSet.add(c);
            }
        }

        return alphabetSet.size() == 26; // There should be 26 unique letters (A to Z)
    }
}
