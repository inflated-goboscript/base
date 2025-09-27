%include inflator/assert
%include inflator/math
%include inflator/string
%include inflator/base

costumes "blank.svg";

onflag {main;}
proc main {
    assert_eq base_conv("457JIOJOI", DIGITS & ASCII_UPPERCASE, B16_DIGITS), "AA269EDA7A2", "base_conv";
    assert_eq base_convf("ab.cde", B16_DIGITS & "G", DIGITS & "A"), "155.832215", "base_conv";
}
 