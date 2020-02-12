require("minitest/autorun")
require('minitest/rg')
require_relative("./card_game")
require_relative("./card")

class CardGameTest < MiniTest::Test

  def setup
    @card1 = Card.new("Diamond", 5)
    @card2 = Card.new("Spade", 1)
    @card_game = CardGame.new()
  end

  def test_can_check_for_ace_true
    assert_equal(true, @card_game.check_for_ace(@card2))
  end

  def test_can_check_for_ace_false
    assert_equal(false, @card_game.check_for_ace(@card1))
  end

  def test_can_get_highest_card
    assert_equal(@card1, @card_game.highest_card(@card1, @card2))
  end

  def test_can_get_cards_total
    assert_equal("You have a total of 6", @card_game.cards_total([@card1, @card2]) )
  end

end
