// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract FlightTicket {
    address payable public Airline;
    uint public price;
    uint public totalSeats;

    struct Seat {
        address passenger;
        bool isBooked;
    }

    mapping(uint => Seat) public seats;

    event seatBooked(uint seatNumber, address passenger);

    constructor(uint _totalSeats, uint _price) {
        Airline = payable(msg.sender);
        totalSeats = _totalSeats;
        price = _price;
    }

    function BookYourSeat(uint _seatNumber) public payable {
        require(
            _seatNumber > 0 && _seatNumber <= totalSeats,
            "invalid seat number"
        );
        require(!seats[_seatNumber].isBooked, "seat unavailable");
        require(msg.value >= price, "enter valid amount");

        seats[_seatNumber].isBooked = true;
        seats[_seatNumber].passenger = msg.sender;

        emit seatBooked(_seatNumber, msg.sender);
    }

    function checkStatus(uint _seatNumber) public view returns (bool isBooked) {
        require(
            _seatNumber > 0 && _seatNumber <= totalSeats,
            "invalid seat number"
        );
        require(msg.sender == Airline, "only for Airline officials use");
        return seats[_seatNumber].isBooked;
    }
}
