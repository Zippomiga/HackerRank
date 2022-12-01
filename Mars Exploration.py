# A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

# Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, s, determine how many letters of the SOS message have been changed by radiation.

# Example
# s = 'SOSTOT'
# The original message was SOSSOS. Two of the message's characters were changed in transit.

# Explanation
# Sample 0

# S = SOSSPSSQSSOR, and signal length |S| = 12. Sami sent 4 SOS messages (i.e.: 12/3 = 4).

# Expected signal: SOSSOSSOSSOS
# Recieved signal: SOSSPSSQSSOR

# We print the number of changed letters, which is 3.

# Sample 1

# S = SOSSOT, and signal length . Sami sent  SOS messages (i.e.: 2).

# Expected Signal: SOSSOS
# Received Signal: SOSSOT

# We print the number of changed letters, which is 1.


def marsExploration(s):
    sos = 'SOS'
    altChtr = 0

    for i in range(0, len(s), 3):
        signal = s[i:i+3]
        if signal != sos:
            if sos[0] != signal[0]: altChtr += 1
            if sos[1] != signal[1]: altChtr += 1
            if sos[2] != signal[2]: altChtr += 1

    return altChtr