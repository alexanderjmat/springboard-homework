from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):

    # TODO -- write tests for every view function / feature!

    def setUp(self):

        self.client = app.test_client()
        app.config['TESTING'] = True

    def test_home_page(self):
        with app.test_client() as client:
            resp = client.get('/')

            self.assertEqual(resp.status_code, 200)
    
    def test_valid_word(self):
        with self.client as client:
            with client.session_transaction() as session:
                session['board'] = [["S", "E", "V", "T", "U"], 
                                    ["L", "B", "T", "M", "A"], 
                                    ["C", "J", "H", "O", "T"], 
                                    ["X", "L", "T", "E", "T"], 
                                    ["Q", "A ", "G", "T", "M"]]
        response = self.client.get('/guess?word=hot')
        self.assertEqual(response.json['result'], 'ok')

    def test_word_not_on_board(self):
        with self.client as client:
            with client.session_transaction() as session:
                session['board'] = [["S", "E", "V", "T", "U"], 
                                    ["L", "B", "T", "M", "A"], 
                                    ["C", "J", "H", "O", "T"], 
                                    ["X", "L", "T", "E", "T"], 
                                    ["Q", "A ", "G", "T", "M"]]
        response = self.client.get('/guess?word=perfection')
        self.assertEqual(response.json['result'], 'not-on-board')
    
    def test_word_is_not_word(self):
        with self.client as client:
            with client.session_transaction() as session:
                session['board'] = [["S", "E", "V", "T", "U"], 
                                    ["L", "B", "T", "M", "A"], 
                                    ["C", "J", "H", "O", "T"], 
                                    ["X", "L", "T", "E", "T"], 
                                    ["Q", "A ", "G", "T", "M"]]

        response = self.client.get('/guess?word=dhjsdhfjhsjfhdjs')
        self.assertEqual(response.json['result'], 'not-word')





    

    
