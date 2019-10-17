Test.expect(RomanNumerals.toRoman(1000) == 'M', '1000 should == "M"')
Test.expect(RomanNumerals.toRoman(4) == 'IV', '4 should == "IV"')
Test.expect(RomanNumerals.toRoman(1) == 'I', '1 should == "I"')
Test.expect(RomanNumerals.toRoman(1990) == 'MCMXC', '1990 should == "MCMXC"')
Test.expect(RomanNumerals.toRoman(2008) == 'MMVIII', '2008 should == "MMVIII"')

Test.expect(RomanNumerals.fromRoman('XXI') == 21, 'XXI should == 21')
Test.expect(RomanNumerals.fromRoman('I') == 1, 'I should == 1')
Test.expect(RomanNumerals.fromRoman('IV') == 4, 'IV should == 4')
Test.expect(RomanNumerals.fromRoman('MMVIII') == 2008, 'MMVIII should == 2008')
Test.expect(RomanNumerals.fromRoman('MDCLXVI') == 1666, 'MDCLXVI should == 1666')