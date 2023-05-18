def cakes(recipe, available):
    done = False
    count = 0
    if len(recipe) > len(available):
        return 0
    while not done:
        for ingredient in recipe:
            try:
                available[ingredient] -= recipe[ingredient]
            except KeyError:
                done = True
                count = 0
            try:
                if available[ingredient] < 0:
                    done = True
                else:
                    continue
            except KeyError:
                done = True
                count = 0
            break
        count += 1 if not done else 0
    return count


recipe = {"flour": 500, "sugar": 200, "eggs": 1}
available = {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}
print(cakes(recipe, available))
