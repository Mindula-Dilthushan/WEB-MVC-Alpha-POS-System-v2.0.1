package controller;

import db.DBConnection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

@WebServlet(urlPatterns = "/Customer")
public class CustomerController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Start doPost");
            try {
                Connection con = DBConnection.initializeDatabase();
                PreparedStatement st = con.prepareStatement("INSERT INTO customer VALUES (?, ?, ?, ?)");
                st.setString(1, req.getParameter("customerId"));
                st.setString(2, req.getParameter("customerName"));
                st.setString(3, req.getParameter("customerMobile"));
                st.setString(4, req.getParameter("customerAddress"));
                st.executeUpdate();
                st.close();
                con.close();
                System.out.println("Save Customer");
            }
            catch (Exception e) {
            }
        System.out.println("End doPost");
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    }
}
