@isTest
public class OpportunityExampleTest {


@isTest
static void testOpportunityAmount(){

//test data setup
Decimal amount = 1000;
    
//test execution
test.startTest();
decimal a = OpportunityExample.calculateOppAmount(amount);
test.stopTest();

//test validation
decimal oppAmount = amount*12;
System.assertEquals(oppAmount,a,'executed successful');

}

}


/*
what it should contain??
	test data setup
    test execution
	test validation

*/