# Roy quiere mejorar su velocidad de escritura en máquina para concursos de programación. Su amigo le dijo que escribiera la oración "The quick brown fox jumps over the lazy dog" repetidamente porque es un pangrama. (pangramas son oraciones construidas usando todas las letras del alfabeto, por lo menos una vez.)

# Después de escribir la oración muchas veces, Roy se aburrió. Entonces comenzó a buscar otros pangramas.

# Dada una oración s, dile a Roy si es un pangrama o no.

# Ejemplo de Entrada #1
# We promptly judged antique ivory buckles for the next prize    
# Ejemplo de Salida #1
# pangram

# Ejemplo de Entrada #2
# We promptly judged antique ivory buckles for the prize    
# Ejemplo de Salida #2
# not pangram

# Explicación
# En el primer caso de prueba, la respuesta es un pangram porque la oración contiene todas las letras.

def pangrams(s):
    S, F = s.lower(), 'abcdefghijklmnopqrstuvwxyz'

    for ch in S:
        if ch in F: F = F.replace(ch, '')

    return 'pangram' if len(F) == 0 else 'not pangram'