### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card) # does not comply with Ruby method naming convention snake_case
    if card.value = 1 # = is assignment operator, conditional operator is ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # typo, should be def not dif. Also need comma between arguments
  if card1.value > card2.value # poor indentation
    return card # card is not a declared variable. Should be card1
  else
    return card2
  end
end
end # 2 ends

def self.cards_total(cards) # doesn't need self, not a class method
  total # needs, value, should be total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end
```
