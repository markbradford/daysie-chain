class NotificationsController < ApplicationController


##Verify Authenticity Token??

 def notify
  # @client = Twilio::REST::Client.new Rails.application.secrets.twilio_account_sid, Rails.application.secrets.twilio_auth_token

  #SID and AUTH TOKEN need to be added to .env

  account_sid = "test_secret"
  auth_token = "test_secret"

  @client.account.messages.create({
    :from => '+18452432479',
    :to => '+Invited Number',
    :body => 'Welcome to Daysie-Chain'
  })

  render plain: message.status

  end

end