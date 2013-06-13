get '/' do
  erb :index
end

post '/color' do
  cell= rand(1..9).to_s
  color= "#" + "%06x" % (rand * 0xffffff)
  
  content_type :json
  {:cell => cell, :color => color}.to_json
end
