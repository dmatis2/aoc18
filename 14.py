input_str = "635041"
recipes = "37"
elf1 = 0
elf2 = 1

def update(r, e1, e2):
    val1 = int(r[e1])
    val2 = int(r[e2])
    new_r = r + str(val1 + val2)
    new_e1 = (e1 + 1 + val1) % len(new_r)
    new_e2 = (e2 + 1 + val2) % len(new_r)
    return new_r, new_e1, new_e2


while True:
    if input_str in recipes[-7:]:
        break
    val1 = int(recipes[elf1])
    val2 = int(recipes[elf2])
    recipes = recipes + str(val1 + val2)
    elf1 = (elf1 + 1 + val1) % len(recipes)
    elf2 = (elf2 + 1 + val2) % len(recipes)
print(recipes.index(input_str))